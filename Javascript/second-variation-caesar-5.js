//https://www.codewars.com/kata/55084d3898b323f0aa000546

function encodeStr(s, shift) {
  var str = String.fromCharCode(s.toLowerCase().charCodeAt(0) - shift)
    + s[0].toLowerCase() + s;

  // slicing string into pieces
  var l = Math.ceil(str.length / 5);
  var r = str.length - 4 * l;
  var result = [];

  for (var i = 0; i < 4; i++) result.push(str.slice(l * i, l * (i + 1)));
  if (r > 0) result.push(str.slice(-r));

  // encode string
  return result.map((el) => {
    var codes = el.split('')
      .map((letter) => {
        return letter.charCodeAt(0) + ((letter.charCodeAt(0) < 65) ? 0 : shift);
      });
    return String.fromCharCode(...codes);
  });
}

function decode(arr) {
  var str = arr.join('');
  var shift = str.charCodeAt(1) - str.charCodeAt(0);
  var codes = str.slice(2)
    .split('')
    .map((letter) => {
      return letter.charCodeAt(0) - ((letter.charCodeAt(0) < 65) ? 0 : shift);
    });

  return String.fromCharCode(...codes);
}
