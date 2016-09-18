//https://www.codewars.com/kata/5589ad588ee1db3f5e00005a

function pattern(n){
 var output=""
 var mid="11";
 var s = 0;

   for (i=1; i<n; i++){
   output = output + Array(n).join(" ") + Array(n+1).join(i % 10) + Array(n).join(" ") + "\n"

   }
   for (j=2; j<n; j++){
     mid = mid.slice(0,j-1) + (j % 10) + (j % 10) + mid.slice(-j+1)
     while (j==n-1 && s < n){

       output = output + mid.slice(0,j) + Array(n+1).join(n % 10) + mid.slice(-j) + "\n"
       s++
     }

   }
   for (k=n-1; k>0; k--){
   if (k==1){ output = output + Array(n).join(" ") + Array(n+1).join(k % 10) + Array(n).join(" "); continue; }
   output = output + Array(n).join(" ") + Array(n+1).join(k % 10) + Array(n).join(" ") + "\n"


   }

   output = output
 return output;
}
