//https://www.codewars.com/kata/54b724efac3d5402db00065e

var decodeMorse = function(morseCode){

  	var a = morseCode.trim().split("   ").map(function(word){
  		x = word.split(" ").map(function(letter){
  			return MORSE_CODE[letter]
  		}).join("")
  		return x
  	}).join(" ")
  	return a
}
