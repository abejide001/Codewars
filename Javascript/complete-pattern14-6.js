//https://www.codewars.com/kata/559379505c859be5a9000034

function pattern(n,x){
  var str="";

  if (x < 0 || !x){ x = 1 }

while (x > 0) {
  x--
    for (i=0; i<n; i++){
      if (i == n-1) { str+= Array(i+1).join(" ") + ((i+1) % 10) + Array(i+1).join(" ")+ "\n"; continue;}
      str+= Array(i+1).join(" ") + ((i+1) % 10) + Array(((n-2)*2)+2-(i*2)).join(" ") + ((i+1) % 10) + Array(i+1).join(" ") + "\n"
    }

    for (k=n-1; k>0; k--) {

    if (k<=1 && x > 0) { continue; }
    else if (k<=1 && x == 0) { str+= Array(k).join(" ") + ((k) % 10) + Array(((n-2)*2)+4-(k*2)).join(" ") + ((k) % 10) + Array(k).join(" "); continue; }

      str+= Array(k).join(" ") + ((k) % 10) + Array(((n-2)*2)+4-(k*2)).join(" ") + ((k) % 10) + Array(k).join(" ") + "\n"
    }

 }
  return str
}
