/**
 * The myMap() function below takes an array and a function in input
 *
 * Complete its code so that it returns the expected output
 */

function myMap(items, callback) {
  // Ergebnisarray
  let result = [];
  
  for (let i = 0; i < items.length; i++) {
    // Extrahiere das jeweilige Element in eigene Konstante
    const currentItem = items[i];

    // Fuehre Callback auf das Element aus und speichere Ergebnis in Konstante zwischen
    const resultItem = callback(currentItem);

    // Haenge Ergebnis an das Ergebnisarray an
    result.push(resultItem);
  }

  return result;
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

function greet(string) {
  return "Hey " + string;
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(myMap([1, 2, 3], double)); // expected output: [2, 4, 6]
console.log(myMap([2, 4, 10], square)); // expected output: [4, 16, 100]
console.log(myMap(["pizza", "broccoli", "ice cream"], capitalizeFirstAndLast)); // expected output: ["PizzA", "BroccolI", "Ice creaM"]
console.log(myMap(["Rufus", "Lisa", "July"], greet)); // expected output: ["Hey Rufus", "Hey Lisa", "Hey July"]
