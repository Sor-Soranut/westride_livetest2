function remove(text){
    if(text[text.length-1] == "!"){
        text = text.substring(0,text.length-1);
    }
    return text;
}
console.log(remove("Hello!!"));



