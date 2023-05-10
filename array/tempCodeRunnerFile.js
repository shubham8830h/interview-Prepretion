
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