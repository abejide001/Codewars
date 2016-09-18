//https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

function combinations(numArr, comb, callback) {
    var arrlength = numArr.length;
    var c = [];
    var inner = function(start, comb_) {
        if (comb_ == 0) {
            callback(c);
        } else {
            for (var i = start; i <= arrlength - comb_; ++i) {
                c.push(numArr[i]);
                inner(i + 1, comb_ - 1);
                c.pop();
            }
        }
    }
    inner(0, comb);
}

function addArr(arr) {
    p = 0;
    for (var i in arr) {
        p += arr[i];
    }
    return p;
}


function chooseBestSum(t, k, ls) {

    var ansArr = [];
    var answer = null;
    combinations(ls, k, function output(arr) { ansArr.push( addArr(arr) ) }  );
    ansArr = ansArr.sort(function (a, b) {  return a - b;  });


    if (ansArr.length <= 0) { return null }
    for (var i in ansArr) {
      if (ansArr[i] <= t) { answer = ansArr[i] }
    }
    if (answer <= t) {return answer} else { return null }

}
