//https://www.codewars.com/kata/robby-the-robot

function map(field){
	var len = Math.sqrt(field.length)
	var splt = field.match(new RegExp('.{1,' + len + '}', 'g'));
	var arr = [];

	for(i=0; i < len; i++){		arr.push([]);	} //set empty array
	for(k=0; k < len; k++){	for(j=0; j < len; j++){ arr[k].push(splt[k][j]) }	} //map fields

	return arr
}

function getCommands(field, power) {
	var len = Math.sqrt(field.length)
	var arr = map(field)
	var CURR = [];
	var END = [];
	var ans = [];

	for(i=0; i < len; i++){
		if(arr[i].indexOf("S") != -1){ CURR.push(i); CURR.push(arr[i].indexOf("S")); CURR.push(1);	}
		if(arr[i].indexOf("T") != -1){ END.push(i);  END.push(arr[i].indexOf("T")); END.push(1);	}
	}
for(w=0; w < power; w++){
	if(CURR != END){

		if(CURR[1] < END[1]){ //move east
			while(CURR[2] != "2"){ //face east
				if(CURR[2] == 4){ ans.push("r"); CURR[2] = 1; } //if facing west turn right
				else if(CURR[2] == 3){ ans.push("l"); CURR[2]-- } // if facing south turn left
				else if(CURR[2] == 1){ ans.push("r"); CURR[2]++ } // if facing north turn right
			}

			if(CURR[2] == "2"){ CURR[1]++; ans.push("f") ; continue; } //facing east, move foward
		}

		if(CURR[0] < END[0]){ //move south
			while(CURR[2] != "3"){ //face south
				if(CURR[2] == 4){ ans.push("l"); CURR[2]--; } //if facing west turn left
				else if(CURR[2] == 2){ ans.push("r"); CURR[2]++ } // if facing east turn right
				else if(CURR[2] == 1){ ans.push("r"); CURR[2]++ } // if facing north turn right
			}

			if(CURR[2] == "3"){ CURR[0]++; ans.push("f") ; continue; } //facing south, move foward

		}

		if(CURR[0] > END[0]){ //move north
			while(CURR[2] != "1"){ //face north
				if(CURR[2] == 4){ ans.push("r"); CURR[2] = 1; } //if facing west turn right
				else if(CURR[2] == 2){ ans.push("l"); CURR[2]-- } // if facing east turn left
				else if(CURR[2] == 3){ ans.push("r"); CURR[2]++ } // if facing south turn right
			}

			if(CURR[2] == "1"){ CURR[0]--; ans.push("f") ; continue; } //facing north, move foward
		}

		if(CURR[1] > END[1]){ //move west


			while(CURR[2] != "4"){ //face west
				if(CURR[2] == 1){ ans.push("l"); CURR[2] = 4; } //facing north turn left
				else if(CURR[2] == 2 || CURR[2] == 3){ ans.push("r"); CURR[2]++ } //facing east or south, turn right
			}

			if(CURR[2] == "4"){ CURR[1]--; ans.push("f"); continue; } //facing west, move forward
		}



		if(CURR[1] == END[1] && CURR[0] == END[0]){ CURR[2] = 1; }
		if(ans.length > power) { console.log(ans); return []; }

	}

}
console.log(arr)

console.log(CURR)
console.log(END)
console.log(ans)

return ans
}

console.log(getCommands('T#.##..S.', 20))
