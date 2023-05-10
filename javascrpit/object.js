// how to create object in differnt differnt methods

const { json } = require("stream/consumers");

// 1) object literal

let obj = {
  name: "shubham",
  age: 23,
};

console.log(obj);
//---------------------------------------------------------
// 2) constructor

function obj2(name, age) {
  (this.name = name), (this.age = age);
}

let persone = new obj2("shubham", 23);
console.log(persone);

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// const person = new Person("John", "Doe", 30);
// console.log(person)

//----------------------------------------------------------------

// 3) ES6 class

class obj3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let resultObj3 = new obj3("shubham", 23);
console.log(resultObj3);

//----------------------------------------------------------------
// 4)  Object.create method

const personProto = {
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person = Object.create(personProto);
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

console.log(person);

//==============================================================

// 1) methods  Object.assign()

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

let target = { a: 1, b: 2 };
let source = { b: 5, c: 10 };

let returnValue = Object.assign(target, source);

console.log(returnValue);

//=========================================================

//2) Object.create method

const obj5 = {
  age: 24,
};
const me = Object.create(obj5);

me.name = "Matthew";
me.isHuman = true;

console.log(me);


// ==========================================

// 3) Object.entries()
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

let Number = { a: 1, b: 2, c:3};

for(let [key,value] of Object.entries(Number)){
  console.log(`${key} : ${value}`)
}


// ==========================================
// 4) Object.freeze()

// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.


const obj6={
  name:"ravi"
}
Object.freeze(obj6)   // Throws an error in strict mode
obj6.name="shubham"
console.log(obj6.name)







// ===========================================================================================

// JSON.stringify

const object4 = {
  name: "shubham",
  lastName: "hanamane",
  age: 23,
  address: {
    city: "palus",
    dist: "sangli",
  },
};

let res = JSON.stringify(object4);
console.log(res);

// ======================================================================
// JSON.parse

let object3 =
  '{"name":"shubham","lastName":"hanamane","age":23,"address":{"city":"palus","dist":"sangli"}}';
let result = JSON.parse(object3);
console.log(result);

// ============================================================================
//  Copying objects
//---------------------------------------------------
// 1) shallow copy

let object = {
  name: "shubahm",
  lastName: "hanamane",
  age: 23,
};

let copy = { ...object };
copy.name = "Rohit";

console.log(copy);
console.log(object);

//---------------------------------------------------
// 2) deep copy object

const object2 = {
  name: "shubham",
  lastName: "hanamane",
  age: 23,
  address: {
    city: "palus",
    dist: "sangli",
  },
};

let deepCopy = JSON.parse(JSON.stringify(object2));

object2.name = "Rohit";
object2.address.city = "Mumbai";

console.log(deepCopy.name);
console.log(object2);
console.log(deepCopy);

// =====================================================

// use of this keyword in js

let obj4 = {
  name: "shubham",
  age: 23,
  printDetails: function () {
    return `persone name is ${this.name} it is age ${this.age}`;
  },
};

console.log(obj4.printDetails());
