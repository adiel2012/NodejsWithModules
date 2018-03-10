var fs = require('fs');
var path_module = require('path');
var http = require('http');

LoadModules('./extensions')
.then((extensions_urls)=>{
    let module_holder = {};
    extensions_urls.forEach((extensions_url)=>{
        let instance = require(extensions_url);    
        if (!(instance.key  in module_holder))
        {
            module_holder[instance.key] = instance;
        }
    });
    return Promise.resolve(module_holder);
})
.then((module_holder)=>{
    http.createServer( (req, res) =>{

        let splited = req.url.substr(1).split('/');
        let key;
        if(splited.length > 0 && (key = splited[0]) && (key in module_holder))
        {
            module_holder[key].code(req, res);        
        }
        else{
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n");
            res.end();
        }
       
    }).listen(8080);
});

function LoadModules(path, callback) {    
    return new Promise(function(resolve, reject) {
        let result = [];
        fs.readdirSync(path).forEach((extension_folder)=>{
            let endpoints_folder = path_module.join(path, extension_folder, 'HttpEndPoints');           
            fs.readdirSync(endpoints_folder).forEach((endpoint_name)=>{
                let endpoint_url =  path_module.join(endpoints_folder, endpoint_name);
                result.push(path_module.resolve(endpoint_url));
            });
        });
        resolve(result);
      });
}