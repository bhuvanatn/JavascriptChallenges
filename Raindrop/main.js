const raindrop = function(number) {
  let string = "";
  if (number % 3 === 0) {
    string += "Pling";
    if (number % 5 === 0) {
      string += "Plang";
    }
    if (number % 7 === 0) {
      string += "Plong";
    }
    if (string.length === 0) {
      string = string + number;
    }
    return string;
  }
};
console.log(raindrop(33));
console.log(raindrop(555));
console.log(raindrop(777));
console.log(raindrop());
