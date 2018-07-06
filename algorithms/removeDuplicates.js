function removeDuplicates(arr){
	var current = 0;
		for(var i=1; i<arr.length; i++){
			if (arr[current] !== arr[i]) {
				arr[current+1] = arr[i]
				current++
			}
		}
		arr.length = current+1;
	console.log(arr);
}


var arr = [2,6,6,8,8];
removeDuplicates(arr);
console.log(arr)

i = 1
current = 0