//https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(prod){
  var f = [0,1]
  var high1, high2;


  while ( (f[f.length - 2] * f[f.length - 1]) < prod ) {
    f.push(f[f.length - 2] + f[f.length - 1])

  }
  high1 = f[f.length - 2]
  high2 = f[f.length - 1]
  if (high1 * high2 == prod) { var arr = [high1, high2, true] }
  else { var arr = [high1, high2, false] }
  return arr
}
