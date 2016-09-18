//https://www.codewars.com/kata/57acc8c3e298a7ae4e0007e3

function collatz(n, array){

  if (n==1) { array.push(n); return array } else { array.push(n) };

  return collatz(n%2 ? 3*n+1 : n/2, array);
}

function longestCollatz (inputArray) {
  var lengths = []
  for (i in inputArray){
    lengths.push(collatz(inputArray[i], []).length)
  }
  return inputArray[ lengths.indexOf(Math.max.apply( Math, lengths )) ];
}
