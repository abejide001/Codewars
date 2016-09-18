//https://www.codewars.com/kata/559a28007caad2ac4e000083

function fib(n) {
  var
    a = 1,
    b = 1;
  for (var i = 2; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }

  return b;
}

function perimeter(n) {
  var sum = 2,
    a = 1,
    b = 1;
  for (var i = 2; i <= n; i++) {
    var c = a + b;
    sum += c;
    a = b;
    b = c;
  }

  return 4*sum;
}
