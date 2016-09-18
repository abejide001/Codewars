//https://www.codewars.com/kata/find-the-smallest

function smallest(n) {
	var hold = [];
	var ind = 0;
    var arr_lowest = n.toString(10).split("").sort()[ind]; //lowest digit in string
    var arr = n.toString(10).split(""); //string converted to array
	var lowest_index = arr.lastIndexOf(arr_lowest) //index of lowest value in arr


	while(lowest_index == 0){
		ind++
		hold.push(arr[lowest_index])
		arr.splice(lowest_index,1) //remove first index
		arr_lowest = n.toString(10).split("").sort()[ind];
		lowest_index = arr.lastIndexOf(arr_lowest)
	}
	hold.push(arr[lowest_index])
	arr.splice(lowest_index, 1)
	var ans = hold.concat(arr).join('');
	var format = [];

	//console.log(n.toString(10).split("").lastIndexOf(arr_lowest))
	//console.log(n.toString(10).split("").indexOf(arr_lowest))
	format.push(parseInt(ans));
	format.push(hold.length-1+lowest_index);
	format.push(hold.length-1);

    return format
}


//Expected: [358557539,0,8], instead got: [393585575,8,0]
console.log(smallest(935855753)) //index is hold.length-1+lowest_index, moved to hold.length-1


// 8620945003639469 expected
// 862094503639469,7,0], instead got:
// 862094503639469,8,0]
//
// 7003264411185407 expected
// 32644111785407,0,10], instead got: [
// 700326441118547,14,0]
