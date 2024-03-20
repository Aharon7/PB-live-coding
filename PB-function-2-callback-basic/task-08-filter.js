/**
 * The myFilter() function takes an array and a function in input
 *
 * If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item
 * It returns the filtered array
 *
 * Complete the code below to get the expected output
 */
function myFilter(array, callback) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

function endsWithP(string) {
  return string[string.length - 1].toLowerCase() === "p";
}

console.log(myFilter(["grasp", "clash", "laptop", "mouse", "dish"], endsWithP)); // expected output: ["grasp", "laptop"]

console.log(
  myFilter(["a", "b", "c", "d", "e", "f", "g", "h", "i"], (letter) =>
    "aeiou".includes(letter.toLowerCase())
  )
); // expected output: ["a", "e", "i"]
