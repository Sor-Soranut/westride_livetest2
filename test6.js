function sort(arr) {
  let test = [];
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > arr[k + 1]) {
      test = arr[k + 1];
      arr[k + 1] = arr[k];
      arr[k] = test;
      return sort(arr);
    }
  }
  return arr;
}
function diffArray(arr1, arr2) {
  let diff_array = [];
  sort(arr1);
  sort(arr2);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i, i + 1);
        arr2.splice(j, j + 1);
        return diffArray(arr1, arr2);
      }
    }
  }
  diff_array = arr1.concat(arr2);
  return sort(diff_array);
}
console.log(diffArray([1, 2, 3], [100, 2, 1, 10]));
