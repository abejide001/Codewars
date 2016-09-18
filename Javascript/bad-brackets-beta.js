//https://www.codewars.com/kata/57ae282e6b34fadeaf000320

function badBrackets(str){
  var pairs = { ')':'(', '}':'{', ']':'[' };
  var empt = [];
  var currChar;
  var string;

  string = str.replace(/\s/g, '');

  for (var i=0; i<string.length; i++) {
    currChar = string[i];

    if (pairs[currChar]) {
      empt.push(currChar);
    } else {
      if (currChar !== pairs[empt.pop()]) {
        return false;
      }
    }
  }

  return empt.length === 0;

}
