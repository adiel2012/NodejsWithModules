# NodejsWithModules
this project tries to load dinamically modules and dispatch according to its definition:
ex: http://localhost:8080/EAWB_endpoint1/other/parameters/aa/bb
It is routed to 
https://github.com/adiel2012/NodejsWithModules/blob/master/extensions/EAWB/HttpEndPoints/endpoint1.js


module.exports={<br/>
&nbsp;    key: "EAWB_endpoint1",<br/>
&nbsp;    code: (req, res)=>{<br/>
&nbsp;&nbsp;        res.writeHead(200, {'Content-Type': 'text/html'});<br/>
&nbsp;&nbsp;        res.write("This is EAWB endpoint1");<br/>
&nbsp;&nbsp;        res.end();<br/>
&nbsp;    }<br/>
};<br/>
