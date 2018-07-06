function reverseWordArray (str){
    var newArr = [];
    var s = '';
    for (let i;0; i < str.length; i++){
        if (str[i] != ''){
            return str;
        }
        else {
            newArr.push(s);
            s = '';
        }
    for (let j = newArr.length; j > 0; j--){
        s += newArr[j] + '';
    }
    }
}
reverseWordArray('This is a test');