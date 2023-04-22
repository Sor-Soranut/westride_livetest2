function textcenter(text) {
  if (text.length % 2 == 1) {
    let con = text.slice((text.length - 1) / 2, (text.length - 1) / 2 + 1);
    return con;
  } else {
    let con = text.slice(text.length / 2 - 1, text.length / 2 + 1);
    return con;
  }
}
console.log(textcenter("test"));
