function process(num) {
  num = num.toString();
  let sum = 0;
  for (let index = 0; index < num.length; index++) {
    sum += Number(num[index]) ** (index + 1);
  }
  return sum;
}
console.log(process(321));
