//https://www.codewars.com/kata/paperboy

function cheapestQuote (num) {
	var obj = {'3.85': 40, '1.93': 20, '0.97': 10, '0.49': 5, '0.10': 1}, ans = 0;
	Object.keys(obj).forEach(function(key) { while (num >= obj[key])	{	ans += +key; num -= obj[key];	}})
	return +ans.toFixed(2);
}