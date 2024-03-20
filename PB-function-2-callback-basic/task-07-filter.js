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
  
function longerThan5(string) {
    return string.length > 5;
}
  
console.log(myFilter(["house", "dog", "banana", "watermelon"], longerThan5)); // expected output: ["banana", "watermelon"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (number) => number % 3 === 0)); // expected output: [3, 6, 9, 12]
