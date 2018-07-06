this.length = function(){
	var count = 1
	var runner = this.head
	if (!this.head){
		count=0
	}
	while (runner) {
		count++
		runner = runner.next
	}
	return count
	}