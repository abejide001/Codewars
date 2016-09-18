//https://www.codewars.com/kata/5286b2e162056fd0cb000c20

// Print the collatz sequence starting with positive integer n.
// Ex: collatz(4) should return "4->2->1"
function collatz(n){

  if (n==1) { return  "1" };
  return n + "->" + collatz(n%2 ? 3*n+1 : n/2);

}
