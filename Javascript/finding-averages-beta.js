//https://www.codewars.com/kata/finding-averages/

var average = (n) => {
  return (typeof n === "string") ? "Incorrect" : n.reduce( (a, b) => a + b , 0 ) / n.length;
}