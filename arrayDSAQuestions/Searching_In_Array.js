// bineary search problems

let arr = [1, 2, 5, 16, 19, 22, 29, 45, 56, 78];
let target = 45;

function binearySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let mid;

  while (l <= r) {
    mid = Math.floor(l + (r-l) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

console.log(binearySearch(arr, target));


