//https://www.codewars.com/kata/5226eb40316b56c8d500030f

function pascalsTriangle(n) {

var tb = [1]
var m = 0
var i = 1

while (i < n){
  i++
  tb.push(1)
  if (i >= 3){
    for(j=2; j<i; j++){
      m = (tb[tb.length-i] + tb[tb.length-i+1])
      tb.push(m)
    }
  }
  tb.push(1)
}
return tb

  //return a flat array representing the values of Pascal's Triangle to the n-th level
}
