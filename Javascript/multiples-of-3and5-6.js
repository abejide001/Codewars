//https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){

var divisble = 0
for (i=0; i < number; i++){
if ((i/3) % 1 == 0 || (i/5) % 1 == 0)
divisble = divisble + i;
}
  return divisble
}
