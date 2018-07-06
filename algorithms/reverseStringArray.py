Alist = ["Hello" , "2" , "Meggie" , "Diamond" , "8" , "6"]

def Reverse(Alist):
	for i in range (0, int(len[Alist]/2)):
		temp = Alist[i]
		Alist[i] = Alist[len(Alist)-1-i]
		Alist[len(Alist)-1-i] = temp
	return Alist