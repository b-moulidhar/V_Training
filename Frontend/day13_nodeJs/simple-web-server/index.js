const http = require("http");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("welcome to my system");
    res.end();
})

server.listen(3001,"127.0.0.1",function(err){
    if(err){
        console.log("error",err);
    }
    else{
        console.log("server running on 127.0.0.1:3001");
    }
});