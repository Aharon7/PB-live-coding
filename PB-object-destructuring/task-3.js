/**
 * Task 3
 * 
 * You have an array containing the basic ingredients for a 
 * pizza, together with some optional toppings.
 * 
 * Using destructuring assignment, save the first 3 main 
 * ingredients into separate variables.
 * 
 * Save the toppings (from mushrooms to eggplant) into an
 * array called toppings.
 * 
 * Log the toppings to the console as a string, with each 
 * topping separated by a comma.
 * 
 * Expected output:
 * 
 * Toppings: mushrooms, onion, pepper, eggplant
 */

const ingredients = [
  "pizza dough",
  "tomatoes",
  "mozzarella",
  "mushrooms",
  "onion",
  "pepper",
  "eggplant",
];

// Destrukturiere Array in 4 Konstanten
const [firstIngredient, secondIngredient, thirdIngredient, ...toppings] = ingredients;

console.log("Toppings:", toppings.join(', ')); // Toppings: mushrooms, onion, pepper, eggplant
