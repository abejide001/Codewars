//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  var vowelsCount = 0;

 for (i = 0; i < str.length; i++){
 if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u")
  vowelsCount = vowelsCount + 1;

  }
  return vowelsCount;
}
