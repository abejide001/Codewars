//https://www.codewars.com/kata/strings-mix

function sortObject(o) {
    var sorted = {},
    key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

function mix(s1, s2) {
	var ans = ""
	var s1obj = {}
	var s2obj = {}
    s1 = s1.replace( /[^a-z]/g, '' );
    s2 = s2.replace( /[^a-z]/g, '' )

    for(i=0; i < s1.length; i++){
    	if(s1obj[s1.charAt(i)]){ s1obj[s1.charAt(i)]++ } else { s1obj[s1.charAt(i)] = 1 }
    }
    for(i=0; i < s2.length; i++){
    	if(s2obj[s2.charAt(i)]){ s2obj[s2.charAt(i)]++ } else { s2obj[s2.charAt(i)] = 1 }
    }

    s2obj = sortObject(s2obj)
    s1obj = sortObject(s1obj)


for(i=0; i < 4; i++){
    if (s1obj || s2obj){
    	var s1srt = Object.keys(s1obj).reduce(function(a, b){ return s1obj[a] > s1obj[b] ? a : b });
    	var s2srt = Object.keys(s2obj).reduce(function(a, b){ return s2obj[a] > s2obj[b] ? a : b });
    	var s1sort = s1srt;
    	var s2sort = s2srt
    		console.log('obj1 ' + s1sort + " repeat " + (s1obj[s1sort]))
    		console.log('obj2 ' + s2sort + " repeat " + (s2obj[s2sort]))

    	if(s1obj[s1sort] > s2obj[s2sort]){
    		ans= ans + "1:" + s1sort + "/" //.repeat(s1obj[s1sort])
    		delete s1obj[s1sort];
    		delete s2obj[s1sort];
    	}
    	if(s1obj[s1sort] < s2obj[s2sort]){
    		ans= ans + "2:" + s2sort + "/"    //.repeat(s2obj[s2sort])
    		delete s1obj[s2sort];
    		delete s2obj[s2sort];
    	}


    	if(s1obj[s1sort] == s2obj[s2sort]){ //first check if they have each others letters, if not then print
    		if(!s1obj.hasOwnProperty(s2sort)){
	    		ans= ans + "2:" + s2sort + "/";
	    		console.log(s2obj)
	    		delete s1obj[s1sort]; delete s2obj[s2sort];
    		}

	    		//console.log('check ' + s1sort.repeat(s1obj[s1sort]))
    		ans= ans + "=:" + s1sort + "/"; delete s1obj[s1sort]; delete s2obj[s1sort];
    	}


    	//console.log('' + s1sort.repeat(s1obj[s1sort]))
    	//console.log('' + s2sort.repeat(s2obj[s2sort]))
    }
}
    console.log(ans)
    return ans
}

mix("Are they here", "yes, they are here")//, "2:eeeee/2:yy/=:hh/=:rr"
