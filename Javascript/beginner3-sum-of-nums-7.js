//https://www.codewars.com/kata/55f2b110f61eb01779000053

function GetSum( a,b )
{
var sum = 0;
var equal = 0;
var lower;
var higher;
   if (a<b){
   lower = a;
   higher = b
   } else if (a>b){
   lower = b;
   higher = a
   } else { equal = a}


   for (i = lower; i<=higher; i++){
   sum = sum + i
   }
   if (equal != 0){ sum = equal};


   return sum;
}
