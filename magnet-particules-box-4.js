//https://www.codewars.com/kata/magnet-particules-in-boxes/


//resources:

//http://www.solutionsiq.com/programming-with-groovy-trampoline-and-memoize/
//http://funkyjavascript.com/recursion-and-trampolines/

function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

function recurV(currK, currN, sum) {

  if (currN === 1){
  	sum = sum + ( 1 / (  currK * Math.pow(currN+1, 2*currK)  ) )
    return sum
  }
  else {
  	sum = sum + ( 1 / (  currK * Math.pow(currN+1, 2*currK)  ) )
    return recurV.bind(null, currK, currN-1, sum)
  }


}

function u(k, maxn){
	return trampoline(recurV.bind(null, k, maxn, 0))
}


function recurU(currK, currN, sums) {
	if(currK === 1){
		sums = sums + u(currK, currN)
		return sums
	}
	else{
		sums = sums + u(currK, currN)
		return recurU.bind(null, currK-1, currN, sums)
	}

	}

function doubles(maxk, maxn){
	return trampoline(recurU.bind(null, maxk, maxn, 0))
}

doubles(40, 100000)
