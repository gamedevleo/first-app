const http = require("http");
const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.write("hello node.js");
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");
