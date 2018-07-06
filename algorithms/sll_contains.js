this.contains = function(val){
	var runner = this.head
	var (!this.head){
		return false
	}
	while (runner.val == val){
		return true
	}
	else {
		runner = runner.next
	}
	return false 
	}
}