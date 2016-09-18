// https://www.codewars.com/kata/5772ded6914da62b4b0000f8

const palindromePairs = words => {

  var ans = [];
  for(i=0; i < words.length; i++){
    for(j=0; j < words.length; j++){
    	var word_rev = words[j].toString().split('').reverse().join('')
    	var count = 0;
		  var comp = words[i].toString()

    	if(i == j){	continue; } //don't compare self
    	for(k=0; k < comp.length; k++){
    		if(word_rev.length < comp.length && word_rev[0] == "s"){ break; }
    		if(comp[k].toString() == word_rev[k]){  count++; }
    		if(count == comp.length || count == word_rev.length){ ans.push([i,j]); break; }
    	}
    }


  }
  return ans
}
