//https://www.codewars.com/kata/5508249a98b3234f420000fb

ab = 'abcdefghijklmnopqrstuvwxyz'; //alphabet

function movingShift(u, sh) {
  var r=[];
  var ind=sh;

  while (u.length){
    if ( ab.indexOf(u[0].toLowerCase()) !== -1 ){
        r[ind] = (u[0] === u[0].toLowerCase()) ? ab[(ab.indexOf(u[0].toLowerCase())+ind) % ab.length] : ab[(ab.indexOf(u[0].toLowerCase())+ind) % ab.length].toUpperCase();

      } else { r[ind]=u[0];     }

      u = u.substring(1);
      ind++;
    }
    r = r.join('').match( new RegExp(".{1,"+Math.ceil(r.join('').length/5)+"}","g") )
    if (r.length == 4){ r.push("") }
  return r;
}

function demovingShift(v, sh) {
    var u    = v.join('');
    var r=[];
    var ind = sh;

    while (u.length){
      if ( ab.indexOf(u[0].toLowerCase()) !== -1 ){
        r[ind] = (u[0] === u[0].toLowerCase()) ? ab[(26+(ab.indexOf(u[0].toLowerCase())-ind) % ab.length)%26] : ab[(26+(ab.indexOf(u[0].toLowerCase())-ind) % ab.length)%26].toUpperCase();

      } else { r[ind]=u[0]; }
    u = u.substring(1);
    ind++;
  }
  return r.join('');
}
