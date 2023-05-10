// 1)  first class functions

//  function inside another function we can passed as an argumet
// Now because of this function can be passed as a param to another function(callback) or a function can return another function(higher-order function). map() and filter() are higher-order functions that are popularly used.

function applyOpertions(number, opertions) {
  return opertions(number);
}

let fun = applyOpertions;

function double(number) {
  return number * 2;
}
function square(number) {
  return number * number;
}

console.log(fun(5, square));
console.log(fun(5, double));

//2
    //  first class function  
function applyOpertions1(opertions,a,b){
  return opertions(a,b)
}

function add(a,b){
  return a+b
}
function Substract(a, b) {
  return a - b;
}

console.log(applyOpertions1(add, 2, 3));
console.log(applyOpertions1(Substract, 2, 3));







// ============================================================

// settimeout

function print() {
  setTimeout(() => {
    console.log("hi");
  }, 1000);
}
print();

//setInterval

function printInterVal() {
  let count = 1;
  setInterval(() => {
    console.log(count++);
  },1000);
}
printInterVal();


//setImmediate

setImmediate(()=>{
  console.log("I Am From Setimmidatae")
})


process.nextTick(()=>{
  console.log("process.nextTick");
})






// ============================================================
// to create basic Server

const http=require("http")


const server1=http.createServer(function(req,res){
  // res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
})
let port1 = 3000
server1.listen(port1, () => {
  console.log(`server is running on ${port1}`);
});

// ====================================================================
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});