//https://www.codewars.com/kata/54d81488b981293527000c8f

var sum_pairs=function(ints, s){
    var ans;

    for(i=0; i < ints.length; i++){
		if(ints[i] + ints[i+1] == s){
			return [ints[i], ints[i+1]];
		}
		if(ints[i] + ints[i+2] == s){
			return [ints[i], ints[i+2]];
    	}
		if(ints[i] + ints[i+3] == s){
			return [ints[i], ints[i+3]];
    	}
		if(i != 1 || i+4 != ints.length-1){
			if(ints[i] + ints[i+4] == s){
				return [ints[i], ints[i+4]];
	    	}
		}
    }
    return ans
}
