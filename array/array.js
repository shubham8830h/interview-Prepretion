let array = [1, 2, 3, 4, 5, 6];

// =====================================
//to add element in last array
// array.push(1,2,3)
// array.push(4)

// ======================================
//to remove element in last array
// array.pop()

// ======================================
//to remove element in front of array
// array.shift()

// ======================================
// to add  element in front of array
// array.unshift(23)

/*  ======================================= 
 The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
 */
// const filtertedArray = array.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(filtertedArray);

// ==========================================

// map method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const mapValue=array.map(value=>value*2)
// console.log(mapValue)

// =============================================
// reduce method
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// let initalValue = 0;
// let reduceValue = array.reduce(
//   (result, current) => result + current,
//   initalValue
// );
// console.log(reduceValue);

// console.log(array);

// ==============================================
// slice

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

//  let sliceItems=animals.slice(2)
// console.log(sliceItems);

//  let sliceItems = animals.slice(2,4);
//  console.log(sliceItems);

//  let sliceItems = animals.slice(-2);
//  console.log(sliceItems);

// x = 23; // Gives an error since 'x' is not declared
// var x;
// console.log(x);

//==============================================================

// to find second maximum number in array

let arr = [10, 5, 10]; // secondMax=5

function ToFindSencondMax(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondMax = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
// time complexity 0(n)
console.log(ToFindSencondMax([10, 5, 10, 7, 6, 8]));

// ==============================================================
let nums = [1, 2, 3, 4, 5, 6, 7]; // output [5,6,7,1,2,3,4]

//7,6,5,4,3,2,1   5,6,7,,4,3,2,1    5,6,7,1,2,3,4

let k = 3;

function rotated(nums, k) {
  let size = nums.length;
  if (size > k) {
    k = k % size;
  }
  let l = 0;
  let r = nums.length - 1;

  reverese(nums, l, r);
  reverese(nums, l, k - 1);
  reverese(nums, k, r);

  return nums;
}

//to reverse a array function
function reverese(nums, l, r) {
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
}
console.log(rotated(nums, k));

// =======================================================

// remove duplicates
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.
// Input ;[1,1,2]      ====> output 2, [1,2,_]

function duplicates(arr1) {
  if (arr1.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr1.length; j++) {
    if (arr1[i] !== arr1[j]) {
      i++;
      arr1[i] = arr1[j];
    }
  }
  return arr1;
}

console.log(duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));






// to find second maximum number in array

let array1=[1,34,56,34,23,65]

function secounMax(array1) {
  let maximum = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > maximum) {
      secondMax = maximum;
      maximum = array1[i];
    } else if (array1 != secondMax && array1[i] > secondMax) {
      secondMax = array1[i];
    }
  }

  return secondMax;
}
console.log(secounMax(array1));