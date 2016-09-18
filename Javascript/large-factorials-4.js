//https://www.codewars.com/kata/557f6437bf8dcdd135000010

function multiply(a, b) {

    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];

    for (var i = 0; a[i] >= 0; i++) {
        for (var j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (var i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }
    return result.reverse().join('');
}

function factorial(num) {
  if(num === 1) { return '1' };
  return multiply(num.toString(), factorial(num - 1).toString());
}
