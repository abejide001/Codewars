//https://www.codewars.com/kata/52945ce49bb38560fe0001d9

function pascal(n) {

var ans = [[1]]
var m = 0
var i = 1

while (i < n){
	var tb = []
	i++
	tb.push(1)
	if (i >= 3){
		for(j=2;j<i;j++){
			m = (ans[ans.length-1][j-2] + ans[ans.length-1][j-1])
			tb.push(m)
		}
	}
	tb.push(1)
	ans.push(tb)
}
return ans
}
