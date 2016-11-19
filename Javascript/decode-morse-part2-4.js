//http://www.codewars.com/kata/decode-the-morse-code-advanced

var decodeMorse = function(morseCode){
  	var a = morseCode.trim().split("   ").map(function(word){
  		x = word.split(" ").map(function(letter){
  			return MORSE_CODE[letter]
  		}).join("")
  		return x
  	}).join(" ")
  	return a
}

var decodeBits = function(bits){
    var ans = bits;
    ans = (bits.indexOf("0") === 0) ? ans.slice(ans.indexOf("1")) : ans
    ans = (bits.lastIndexOf("0") == bits.length-1) ? ans.slice(0, ans.lastIndexOf("1")+1) : ans

    if (ans.indexOf("0") % 3 === 0 && (ans.slice(ans.indexOf("0"))).slice(ans.indexOf("0")).indexOf("0") > 0) {
      t = (ans.slice(ans.indexOf("0"))).slice(ans.indexOf("0")).indexOf("0")
    }
    else if (ans.indexOf("0") % 3 === 0){ t = ans.slice(ans.indexOf("0")).indexOf("1")  }
    else if (ans.indexOf("0") >= 0)     { t = ans.indexOf("0")  }
    else                                { t = ans.lastIndexOf("1")+1  }

    return ans.split("0000000".repeat(t)).map(function(word){
      return word.split("000".repeat(t)).map(function(char){
        return char.split("0".repeat(t)).map(function(bit){
          return (bit.length/t === 1 ? '.' : '-')
        }).join("")
      }).join(" ")
    }).join("   ")
}
