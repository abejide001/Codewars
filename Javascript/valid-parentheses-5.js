//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens){
 var pair = { '(':')' };
 var comp = []

 for( var i = 0; i < parens.length; i++){
   if (pair[parens[i]]) { comp.push(parens[i]) }
   else { if (parens[i] !== pair[comp.pop()]) { return false } }
 }
 return comp.length === 0
}
