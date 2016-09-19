//https://www.codewars.com/kata/paperboy-2

function Route(name, h, d, t) {
  this.paperboysNeeded = function() {
    var ans = Math.ceil(h / Math.floor((t * 60 / d) * 50)) - 2, alone = "You and Stripes can handle the work yourselves"
    return (ans <= 0) ? alone : ans + " paperboy" + ((ans > 1) ? 's' : '') + " needed for " + name;
  };
}