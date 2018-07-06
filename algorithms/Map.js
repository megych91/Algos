var arr1 = ["abc", 3, "yo"]; //KEYS
var arr2 = [42, "wassup", "yo"]; // VALUES

function map(arr1, arr2){
    if (arr1.length > arr2.length){
        console.log("warning");
    }
    var dict = {};
    for (var i = 0; i < arr1.length; i++){
        dict[arr1[i]] = arr2[i];
    }
    return dict;
}
console.log(map(arr1, arr2));


// ["abc: 42", "3: wassup", "yo: yo"] // FINAL RESULT 


