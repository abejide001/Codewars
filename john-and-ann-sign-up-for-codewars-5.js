//https://www.codewars.com/kata/john-and-ann-sign-up-for-codewars

var a = [1,2,3,4,5]
var j = []

function john(n) {

 	//day 0 = 0
 	//day 1 = 0
 	//day n = n - ann(n-1)
 	j.push(0)

 	if (n===0){ return j; }
 	else
 	{
 		john(n-1)

 		j.push(n - a[n-1])
 	}


    return j
}
function ann(n) {
 	//day 0 = 1
	//day 1 = 1
	//day n = n - john(n-1)
 	a.push(0)


	if (n===0)
  	{
		return [1]
  	}
	else
  	{
		var a = john(n - 1);
		console.log(a)
		a.push(a[a.length - 1] + a[a.length - 1]);
		return a;
  }



}

console.log(john(2))
