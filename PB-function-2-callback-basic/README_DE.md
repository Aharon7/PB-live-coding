# Grundlagen von Callbacks

## Aufgabe 1

Die Funktion `simpleMap()` unten nimmt eine Zahl und eine Funktion als Eingabe

Sie sollte das Ergebnis der Anwendung dieser Funktion auf die Zahl zurückgeben.

Vervollständige den untenstehenden Code, um die korrekte Ausgabe zu erhalten

```javascript
function simpleMap(number, callback) {
  let result = callback();

  return result;
}

function double(number) {
  return number * 2;
}

console.log(simpleMap(2, double)); // erwartete Ausgabe: 4
console.log(simpleMap(3, double)); // erwartete Ausgabe: 6
console.log(simpleMap(50, double)); // erwartete Ausgabe: 100
console.log(simpleMap(0, double)); // erwartete Ausgabe: 0
```

## Aufgabe 2

Die Funktion `simpleMap()` unten nimmt eine Zahl und eine Funktion als Eingabe

Sie sollte das Ergebnis der Anwendung dieser Funktion auf die Zahl zurückgeben.

Vervollständige den untenstehenden Code, indem du die fehlenden Funktionen (`double()`, `square()`, `triple()`) deklarierst, um die korrekte Ausgabe zu erhalten

```javascript
function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

console.log(simpleMap(2, double)); // erwartete Ausgabe: 4
console.log(simpleMap(3, square)); // erwartete Ausgabe: 9
console.log(simpleMap(50, triple)); // erwartete Ausgabe: 150
console.log(simpleMap(4, square)); // erwartete Ausgabe: 16
```

## Aufgabe 3

Vervollständige den Code für die Funktion `simpleMap()`:

- sie sollte einen String und eine Funktion als Eingabe nehmen
- sie sollte das Ergebnis der Anwendung dieser Funktion auf den String zurückgeben

```javascript
function simpleMap(string, callback) {
}

function greet(string) {
  return "Hey " + string;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(simpleMap("Mark", greet)); // erwartete Ausgabe: "Hey Mark"
console.log(simpleMap("Lenny", reverse)); // erwartete Ausgabe: "ynneL"
console.log(simpleMap("pizza", capitalizeFirstAndLast)); // erwartete Ausgabe: "PizzA"
```

## Aufgabe 4

Die Funktion `myMap()` unten nimmt ein Array und eine Funktion als Eingabe

Vervollständige ihren Code, damit sie die erwartete Ausgabe liefert

```javascript
function myMap(items, callback) {
   let result = [];
   for (let i = 0; i < items.length; i++) {
       result.push();
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

console.log(myMap([1, 2, 3], double)); // erwartete Ausgabe: [2, 4, 6]
console.log(myMap([2, 4, 10], square)); // erwartete Ausgabe: [4, 16, 100] 
console.log(myMap(["pizza", "broccoli", "ice cream"], capitalizeFirstAndLast)); // erwartete Ausgabe: ["PizzA", "BroccolI", "Ice creaM"]
console.log(myMap(["Rufus", "Lisa", "July"], greet)); // erwartete Ausgabe: ["Hey Rufus", "Hey Lisa", "Hey July"]
```

## Aufgabe 5

Die Funktion `myMap()` unten nimmt ein Array und eine Funktion als Eingabe

Schreibe die 3 Funktionen und vervollständige die Aufrufe von `myMap()`, um die erwartete Ausgabe zu erhalten

```javascript
function myMap(items, callback) {
   let result = [];
   for (let i = 0; i < items.length; i++) {
       result.push(callback(items));
   }
   return result;
}
 
console.log(myMap([1, 2, 3])); // erwartete Ausgabe: [901, 902, 903]
console.log(myMap([2, 4, 10])); // erwartete Ausgabe: [1, 2, 5] 
console.log(myMap(["Rufus", "Lisa", "July"])); // erwartete Ausgabe: ["sufuR", "asiL", "yluJ"]
```

## Aufgabe 6

Die Funktion `myFilter()` nimmt ein Array und eine Funktion als Eingabe 

Wenn das Ergebnis des Callbacks wahr ist, fügt sie ein Element zum Array hinzu, ansonsten ignoriert sie das Element

Sie gibt das gefilterte Array zurück

Vervollständige den untenstehenden Code, um die erwartete Ausgabe zu erhalten

```javascript
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push();
    }
  }
  return result;
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 === 1;
}


console.log(myFilter([1, 2, 3, 4, 5], isEven)); // erwartete Ausgabe: [2, 4]
console.log(myFilter([1, 2, 3, 4, 5], isOdd)); // erwartete Ausgabe: [1, 3, 5]
console.log(myFilter(["pizza", "pasta", "ice cream", "potato", "broccoli"], (item) => item.startsWith("p"))); // erwartete Ausgabe: ["pizza, "pasta", "potato"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number > 5)); // erwartete Ausgabe: [6, 7, 8, 9, 10]
```

## Aufgabe 7


Die Funktion `myFilter()` nimmt ein Array und eine Funktion als Eingabe 

Wenn das Ergebnis des Callbacks wahr ist, fügt sie ein Element zum Array hinzu, ansonsten ignoriert sie das Element

Sie gibt das gefilterte Array zurück

Vervollständige den untenstehenden Code, um die erwartete Ausgabe zu erhalten

```javascript
function myFilter(array, callback) {
   let result = [];
   for (let i = 0; i < array.length; i++) {
     if () {
       result.push(array[i]);
     }
   }
   return result;
}
  
function longerThan5(string) {
    return string.length > 5;
}
  
console.log(myFilter(["house", "dog", "banana", "watermelon"], longerThan5)); // erwartete Ausgabe: ["banana", "watermelon"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (number) => number % 3 === 0)); // erwartete Ausgabe: [3, 6, 9, 12]
```

## Aufgabe 8


Die Funktion `myFilter()` nimmt ein Array und eine Funktion als Eingabe

Wenn das Ergebnis des Callbacks wahr ist, fügt sie ein Element zum Array hinzu, ansonsten ignoriert sie das Element

Sie gibt das gefilterte Array zurück

Vervollständige den untenstehenden Code, um die erwartete Ausgabe zu erhalten

```javascript
function myFilter(array, callback) {}

function endsWithP(string) {
  return string[string.length - 1].toLowerCase() === "p";
}

console.log(myFilter(["grasp", "clash", "laptop", "mouse", "dish"], endsWithP)); // erwartete Ausgabe: ["grasp", "laptop"]

console.log(
  myFilter(["a", "b", "c", "d", "e", "f", "g", "h", "i"], (letter) =>
    "aeiou".includes(letter.toLowerCase())
  )
); // erwartete Ausgabe: ["a", "e", "i"]
```