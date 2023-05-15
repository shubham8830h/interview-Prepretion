
let array1 = [100, 200, 300, 400, 65, 66, 599,233];
// maxsum
let wl = 2;

function maxSumToWindow(arr, w) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < w; i++) {
    sum = sum + arr[i];
  }
  maxSum = sum;

  for (let j = w; j < arr.length; j++) {
    sum = sum + arr[j];
    sum = sum - arr[j - w];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
console.log(maxSumToWindow(array1, wl));
