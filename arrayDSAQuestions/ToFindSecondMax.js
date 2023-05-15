//To find the secound max number in array

// let arr = [1, 3, 4, 6, 7, 8, 9, 12, 2, 4, 8];
let arr = [10, 5, 10];

function ToFindSencondMax(arr) {
  let maximum = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      secondMax = maximum;
      maximum = arr[i];
    } else if (arr[i] != maximum && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

console.log(ToFindSencondMax(arr));

// ===============================================================

// to find maximum in array

let arr1 = [1, 3, 4, 6, 7, 8, 9, 12, 2, 4, 8];

function findmax(arr1) {
  let maximum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > maximum) {
      maximum = arr1[i];
    }
  }
  return maximum;
}

console.log(findmax(arr1));

//Slideing window apporach using solve problems
// ======================================

// Largest sum of contiguous sub-array
// Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.
// Input
//     5
//     -20 -12 42 -10 25

//     Where,

// The first line represents the size of an array.
// The second line represents array elements.

// Output
//     57

// Here largest sub-array sum = 42 + (-10) + 25 = 57.

let array = [-20, -12, 42, -10, 25];
let k = 5;

function solution(arr, k) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i]; //0+(-20)=-20    //
    if (sum > maxSum) {
      //-20 > -infinity ==yes
      maxSum = sum; // maxsum=-20
    }
    if (sum < 0) {
      sum = 0; //sum=0
    }
  }
  return maxSum;
}

console.log(solution(array, k));

// ======================================
//in this problms we can find maximum sum to given window size
// let arr11 = [100, 200, 300, 400, 65, 66, 599];    //  700

function maximumSumFind(k, arr, n) {
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  for (let j = k; j < n; j++) {
    sum = sum + arr[j];
    sum = sum - arr[j - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

let arr11 = [100, 200, 300, 400, 65, 66, 599];
let k11 = 2; //window length
let n = arr11.length;
console.log(maximumSumFind(k11, arr11, n));

//==============================================

