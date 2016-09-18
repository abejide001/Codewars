//https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1,array2){


 var r = [];
var str = "";
var n = 0;
 array1 = array1.sort();
 for (i=0; i<array1.length; i++){

  for (k=0; k<array2.length; k++){
  str = array2[k];
  n = str.search(array1[i]);
  if (n != -1 && array1[i] != null){r.push(array1[i]); break; }
  }}
 return r;
}
