//https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c) {
  if ( a + b <= c || a + c <= b || b + c <= a ) return false;  return true
}