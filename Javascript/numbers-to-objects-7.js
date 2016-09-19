//https://www.codewars.com/kata/numbers-to-objects

function numObj(s){ 
	
	var reformat = s.map(function(arg){
		var obj = {};
		obj[arg] = String.fromCharCode(arg)
		return obj
	})

	return reformat	
}