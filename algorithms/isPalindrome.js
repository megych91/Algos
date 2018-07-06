function isPalindrome(str){
  var palen = 0;
  for(var i=0; i<str.length;i++){
    if (str[i] === str[str.length-1-i]){
      palen = palen+0;
    }
    else {
      palen = palen + 1
    }
  }
  if (palen == 0) {
    console.log(true)
  }
  else {
    console.log(false);
  }
}
var str = "racecar"
isPalindrome(str);