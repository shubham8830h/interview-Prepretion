//  reverse array whithout using new array
let arr = [1, 2, 3, 4, 5, 67];
 
function arrayReverse(arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr;
}
console.log(arrayReverse(arr));

// ================================================

// swap a two values

//rotated array in k times
let nums = [1, 2, 3, 4, 5, 6, 7]; // output [5,6,7,1,2,3,4]
//7,6,5,4,3,2,1   5,6,7,4,3,2,1

let k = 11;

function rotated(nums, k) {
   k %= nums.length;  

  let l = 0;
  let r = nums.length - 1;
  reverese(nums, l, r); //7,6,5,4,3,2,1
  reverese(nums, l, k - 1); // 5,6,7,4,3,2,1
  reverese(nums, k, r); // 5,6,7,1,2,3,4

  return nums;
}

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

// ==============================================

// 3) take a number and if number is multiple of 3 print "foo"
// if number are multiple of 5 print "Bar"
//   if numbers are multiple of both 5 and 7 print "foobar"
// if not a multiple of either print nothing

function print(no) {
  if (no % 5 == 0 && no % 3 == 0) {
    return "Foobar";
  }
  if (no % 3 === 0) {
    return "Foo";
  }
  if (no % 5 == 0) {
    return "bar";
  }
}

console.log(print(45));
