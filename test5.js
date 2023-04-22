function re_string(text) {
  let str = "";
  for (let index = 0; index < text.length; index++) {
    str += text[index].repeat(index + 1);
    if (index != text.length - 1) {
      str += "-";
    }
  }
  return str;
}
console.log(re_string("abcd"));
