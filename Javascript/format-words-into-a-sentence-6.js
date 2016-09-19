//https://www.codewars.com/kata/format-words-into-a-sentence

function formatWords (arr) {
  if (arr === [] || arr === null) return "";
  arr = arr.filter(function(n){ return n !== '' })  
  return arr.map(function(a, i){  if (i == arr.length-2)  return a + " and";  return a + ","  }).join(" ").slice(0, -1);
}