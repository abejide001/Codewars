//https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces){
  var pairs = { '(':')', '{':'}', '[':']' };
  var empt = [];
  var currChar;

  for (var i=0; i<braces.length; i++) {
    currChar = braces[i];

    if (pairs[currChar]) { // opening braces
      empt.push(currChar);
    } else { // closing braces
      if (currChar !== pairs[empt.pop()]) {
        return false;
      }
    }
  }

  return empt.length === 0; // any unclosed braces left?
}
