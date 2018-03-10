module.exports={
    key: "can_endpoint1",
    code: (req, res)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("this is Canada Emanifest endpoint1");
        res.end();
    }
};