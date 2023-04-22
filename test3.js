function because(num) {
  if (num > 9) {
    let con = 1;
    num = num.toString();
    for (let value of num) {
      con *= value;
    }
    num = con;
    return because(num);
  } else {
    return num;
  }
}
console.log(because(39));
