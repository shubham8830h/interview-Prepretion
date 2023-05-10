const http=require("http")


const server1=http.createServer(function(req,res){
  // res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
})
let port1 = 3000
server1.listen(port1, () => {
  console.log(`server is running on ${port1}`);
});