//https://www.codewars.com/kata/number-of-trailing-zeros-of-n

function zeros(n){
	var power = 1
	var result = Math.floor(n/5), ans = Math.floor(n/5)

	while(result > 1){
		power++
		result = Math.floor(n/Math.pow(5, power))
		ans+= result
	}
	return ans
}
