# NodejsWithModules
this project tries to load dinamically modules and dispatch according to its definition:
ex: http://localhost:8080/EAWB_endpoint1/other/parameters/aa/bb
It is routed to 
https://github.com/adiel2012/NodejsWithModules/blob/master/extensions/EAWB/HttpEndPoints/endpoint1.js


module.exports={<br/>
    key: "EAWB_endpoint1",<br/>
    code: (req, res)=>{<br/>
        res.writeHead(200, {'Content-Type': 'text/html'});<br/>
        res.write("This is EAWB endpoint1");<br/>
        res.end();<br/>
    }<br/>
};<br/>
