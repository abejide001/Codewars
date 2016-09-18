//https://www.codewars.com/kata/526d42b6526963598d0004db

class CaesarCipher {
	constructor(shift) {
		this.shift = shift;
	}

	encode(string) {

		var str = string.toUpperCase();
		var result = "";
		for(var i=0; i < str.length; i++){
			var c = str.charCodeAt(i);
			if      (c >= 65 && c <=  90) result += String.fromCharCode((c - 65 + this.shift) % 26 + 65);
			else                          result += str.charAt(i);

		}
		return result;
	}

	decode(string) {
		var str = string.toUpperCase();
		var result = "";
		for(var i=0; i < str.length; i++){
			var c = str.charCodeAt(i);
			if      (c >= 65 && c <=  90) result += String.fromCharCode((c + 65 - this.shift) % 26 + 65);
			else                          result += str.charAt(i);

		}
		return result;

	}

}
