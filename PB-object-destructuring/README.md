# Destructuring


## Task 1

7 people participated in a marathon.

You have an array called `results` containing the names of the participants in the order in which they finished the marathon: on the left, the ones that arrived first.

```javascript
const results = ["Sylvia", "Mike", "Kat", "Jeff", "Cindy", "Brandon", "Dylan"];
```

Your task is to save in separate variables the people who finished first, second and third place.

Save the rest of the names as an array, in a separate variable.

Print the results to the console.

Expected output:

```plaintext
First: Sylvia
Second: Mike
Third: Kat
Rest: [ 'Jeff', 'Cindy', 'Brandon', 'Dylan' ]
```

## Task 2

Same as `task 1`, but with objects instead of strings

```javascript
const results = [
   { firstName: "Sylvia", lastName: "Sound", age: 27 },
   { firstName: "Michael", lastName: "Meln", age: 25 },
   { firstName: "Kat", lastName: "Kramer", age: 29 },
   { firstName: "Jeff", lastName: "James", age: 33 },
   { firstName: "Cindy", lastName: "Clap", age: 31 },
   { firstName: "Brandon", lastName: "Blue", age: 24 },
   { firstName: "Dylan", lastName: "Cat", age: 28 },
];
```

Your task is to save in separate variables the people who finished first, second and third place.

Save the rest of the names as an array, in a separate variables.

Print the full name (first name and last name) of the winner to the console.

Expected output:

```plaintext
Winner: Sylvia Sound
```

## Task 3

You have an array containing the basic ingredients for a pizza, together with some optional toppings.

```javascript
const ingredients = [
  "pizza dough",
  "tomatoes",
  "mozzarella",
  "mushrooms",
  "onion",
  "pepper",
  "eggplant",
];

// console.log("Toppings:", toppings); // Toppings: [ 'mushrooms', 'onion', 'pepper', 'eggplant' ]
```

Using destructuring assignment, save the first 3 main ingredients into separate variables.

Save the toppings (from mushrooms to eggplant) into an array called toppings.

Log the toppings to the console as a string, with each topping separated by a comma.

Expected output:

```plaintext
Toppings: mushrooms, onion, pepper, eggplant
```

## Task 4

You have an object with the information about a pet.

```javascript
const pet = {
  name: "Bob",
  type: "cat",
  color: "orange",
  age: 3,
};

// Your code here

console.log("Type:", type);
console.log("Age:", age);
```

Using the destructuring assignment, save the `type` and `age` into 2 separate variables and log them to the console

Expected output:

```plaintext
Type: cat
Age: 3
```

## Task 5


Write a function that accepts a person object as an argument and returns a string with the full name (first name + last name)

Inside the function, use the destructure assignment to get only the properties that you need


```javascript
const person = {
  firstName: "Jim",
  lastName: "Saul",
  age: 34,
  profession: "lawyer",
};

```



