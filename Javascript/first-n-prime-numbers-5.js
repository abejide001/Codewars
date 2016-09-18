//https://www.codewars.com/kata/first-n-prime-numbers

var array = [];
class p {

	first(n){

		var i = 1;
		var count, divisorFound;
		if (array.length){
			i = array[array.length-1]
		}
	    while (array.length < n) {
	    i++;
	    divisorFound = false;
	        for (count = 2; count < i; count++) {
	            if (i % count === 0) {
	                divisorFound = true;
	                break;
	            }
	        }
	        if (divisorFound === false) {
	        	array.push(i);
	        }
	    }

	    return array;
	}
}
var Primes = new p()
