//https://www.codewars.com/kata/53907ac3cd51b69f790006c5

function triangleType(a, b, c){

	var arr = [a, b, c]
	arr.sort(function (a, b) {  return a - b;  })
	var a2 = Math.pow(arr[0], 2), b2 = Math.pow(arr[1],2), c2 = Math.pow(arr[2],2)

	if (arr[0] + arr[1] <= arr[2]){ return 0; }
  if (a2 + b2 == c2){ return 2; }
	if (a2 + b2 > c2){ return 1 }
	else { return 3; }
}
