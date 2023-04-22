function sort(arr) {
  let this_arr = [];
  let i_ref = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] % 2 == 1 && arr[i] > arr[j]) {
          this_arr = arr[j];
          arr[j] = arr[i];
          arr[i] = this_arr;
        }
      }
    }
  }
  return arr;
}
console.log(sort([5,8,6,3,4]));
