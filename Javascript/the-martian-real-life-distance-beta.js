//https://www.codewars.com/kata/57fcadd2334ad3bbbc00023c

function saveMark(c1,c2){

	var pos = c1.split(',').concat(c2.split(',')).map(function(a){
		return parseFloat(a.replace( /[^\d\.]*/g, ''))
	})

	var dir = c1.split(',').concat(c2.split(',')).map(function(a){
		return a.slice(-1)
	})
	pos[0] = dir[0] == dir[2] ? pos[0] : -pos[0];
	pos[1] = dir[1] == dir[3] ? pos[1] : -pos[1];

	var lat1 = pos[0];
	var lon1 = pos[1];
	var lat2 = pos[2];
	var lon2 = pos[3];

	var R = 3390; // km
	var dLat = (lat2-lat1).toRd();
	var dLon = (lon2-lon1).toRd();
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	                Math.cos(lat1.toRd()) * Math.cos(lat2.toRd()) *
	                Math.sin(dLon/2) * Math.sin(dLon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;

	return "" + (Math.floor(d/10)*10) + "KM";
}

Number.prototype.toRd = function() {
   return this * Math.PI / 180;
}
