//callBack
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function add(num, callBack) {
  callBack(null, num + 10);
}
add(10, (err, result) => {
  console.log("error ", err, "result ", result);
});

// =======================================================
//promises

function add1(num) {
  return new Promise((resolve, reject) => {
    // resolve(num + 10);
    reject(num + 20);
  });
}
add1(10)
  .then((res) => console.log(`resolve ${res}`))
  .catch((err) => console.log(`reject ${err}`));

// ==========================================================
//async and await code example

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

//==================================================

//  TDZ   =====> temporal dead zone : the area in which a variable is not accessible.
// Temporal because it depends on time of excution not position
{
  const say = () => console.log(msg);
  const msg = "hi";
  say();
}

// ============================================
// scope of let

let a = 100;
{
  let a = 10;
  console.log(a); //10
}
console.log(a); //100
// ================================================

// shadowed variable in js
let x = 0; // shadowed variable
{
  let x = 1;
  console.log(x);
}

// ===================================================================
// hoisting

// varibale hoisting js
console.log(name);
var name = "shubham";

//function hoisting js
printName();
function printName() {
  console.log("shubham");
}

// ===================================================================

// Closures
function createUser(name) {
  let greeting = "Hi ";
  function greet() {
    return greeting + name + " is Created";
  }
  return greet();
}

console.log(createUser("john"));

//=====================================================================
// IIFE - Immediately Invoked Function Expression

(function (name) {
  console.log(name);
})("shubham")

(function () {
  var x = 1; // this var is now protected
})()

(function (a) {
  var x = a; // this var is now protected
})(2);


//====================================================================

// Currying in js
function multiply(a){
  return function(b){
    return function(c){
      return a*b*c
    }
  }
}
console.log(multiply(2)(5)(3)); 


// ===================================================================





