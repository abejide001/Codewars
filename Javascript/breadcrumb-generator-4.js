//https://www.codewars.com/kata/563fbac924106b8bf7000046

function generateBC(url, separator) {
  	var ignore = ["THE","OF","IN","FROM","BY","WITH","AND", "OR", "FOR", "TO", "AT", "A"], ref = ['<a href="','">', '</a>', '<span class="active">', '</span>'];
  	var arr = url.split("/"), crumbs = []
  	arr[arr.length-1].includes("index") ? arr.pop() : arr
  	arr[0].includes("http") ? arr.shift() : arr
  	arr = arr.filter(function(item){ return (item.length > 0); })

  	var ans = arr.map(function(array, index){
	  	if (array.includes("?")){ array = array.slice(0, array.lastIndexOf("?")); }
	  	if (array.includes("#")){ array = array.slice(0, array.lastIndexOf("#")); }
	  	if (array.includes(".")){ array = array.slice(0, array.lastIndexOf(".")); }
	  	var name = (index === 0) ? "HOME" : array.toUpperCase();
	  	if (index === 0) { str = "/" } else { crumbs.push(array); str = "/" + crumbs.join("/") + "/" }

 		if (name.length > 30 && name.includes("-"))	{ name = name.split("-").map(function(string) { if (ignore.indexOf(string) < 0) return string[0] }).join("") }
	  	else if (name.length <= 30 && name.includes("-"))	{	name = name.split("-").join(" ") }

		if (index ==  arr.length-1)	{ return (ref[3] + name + ref[4]); }
		else	{ return (ref[0] +  str + ref[1] + name + ref[2]); }
  	});

  return ans.join(separator);
}
