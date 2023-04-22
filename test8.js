function sumin(num, target) {
  let output = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] == target) {
        output.push(i, j);
      }
    }
  }
  return output;
}
console.log("Output:" + "[" + sumin([2, 7, 11, 15], 9) + "]");
