//https://www.codewars.com/kata/57ab2d6072292dbf7c000039

function correctPolishLetters (string) {
    var s = string.split('');
    for (var i = 0; i < s.length; i++) {
      switch(s[i]) {
        case ' ': break;
        case 'ą': s[i] = 'a'; break;
        case 'ć': s[i] = 'c'; break;
        case 'ę': s[i] = 'e'; break;
        case 'ł': s[i] = 'l'; break;
        case 'ń': s[i] = 'n'; break;
        case 'ó': s[i] = 'o'; break;
        case 'ś': s[i] = 's'; break;
        case 'ź': s[i] = 'z'; break;
        case 'ż': s[i] = 'z'; break;
        default: s[i] = s[i];
      }
    }
    return s.join('');
}
