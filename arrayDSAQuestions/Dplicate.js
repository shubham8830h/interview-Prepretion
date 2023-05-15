// remove duplicates

// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.
// Input ;[1,1,2]      ====> output 2, [1,2,_]

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(arr) {
  if (arr.length === 0) {
    // first will check length
    return 0;
  }
  let i = 0; //1 st pointer
  for (let j = 1; j < arr.length; j++) {
    //througth loop using
    if (arr[i] != arr[j]) {
      //it will check 0 != 1
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1; //this line will be gives to how many items duplicates count will be give
}
console.log(removeDuplicate(arr));

// ======================================================================
// ===================================================================
// 1) given an array like ex arr[1,2,22,3,5,11,1,2] ==>[1,2]
// filter out duplicate elements and arr the duplicate value is not present
// this time return -1

let arr1 = [1, 2, 22, 3, 5, 11, 1, 2]; //===>[1,2]

function findDupicate(arr1) {
  let mymap = new Map();
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!mymap.has(arr1[i])) {
      mymap.set(arr1[i], 1);
    } else {
      mymap.set(arr1[i], mymap.get(arr1[i]) + 1);
    }
  }
  for (let key of mymap) {
    if (key[1] > 1) {
      result.push(key[0]);
    }
  }
  return result;
}

console.log(findDupicate(arr1));

// ============================================

// 2) find uniqe pairs of element(inside an array whose is equal to a target k

let array1 = [7, 2, 4, 6, 9, 11, 34, 3, 2, 1];
let k = 5;
// output is res = [2,3], [4,1]
function uniqePairs(array1, k) {
  let mymap = new Map(); // 1st map
  let myMap1 = new Map(); //2nd map

  for (let i of array1) {
    if (!mymap.has(i)) {
      mymap.set(i, 1);
    } else {
      mymap.set(i, mymap.get(i) + 1);
    }
  }
  // console.log(mymap);
  for (let j of mymap) {
    let element = k - j[0];         //5-2
    if (mymap.has(element)) {
      if (!myMap1.has(element)) {
        myMap1.set(j[0], element);
      }
    }
  }
  return myMap1.entries();
}
console.log(uniqePairs(array1, k));
