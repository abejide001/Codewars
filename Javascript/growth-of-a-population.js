// https://www.codewars.com/kata/563b662a59afc2b5120000c6
function nbYear(p0, percent, aug, p) {
    var currPop = p0, Year = 0;
    while(currPop < p){ Year++; currPop = currPop + (currPop * (percent/100)) + aug; }
    return Year
}
