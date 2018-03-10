module.exports={
    key: "EAWB_endpoint1",
    code: (req, res)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is EAWB endpoint1");
        res.end();
    }
};