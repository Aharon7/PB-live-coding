# Reduce Grundlagen

## Aufgabe 1

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um die Summe nur der **geraden** Zahlen im Array zu berechnen.

Vervollständige den untenstehenden Code

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30
```


## Aufgabe 2

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um die Summe nur der **geraden** Zahlen im Array zu berechnen.

Vervollständige und korrigiere den untenstehenden Code

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return ;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, "");

console.log(evenNumbersSum); // 30
```

## Aufgabe 3

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um die Summe nur der **geraden** Zahlen im Array zu berechnen.

Vervollständige und korrigiere den untenstehenden Code

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven() {
  if (currentValue % 2 === 0) {
    return accumulator;
  } else {
    return ;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, 2);

console.log(evenNumbersSum); // 30
```


## Aufgabe 4

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um das Gesamtprodukt aller Zahlen zu berechnen.

Korrigiere den untenstehenden Code, um das richtige Ergebnis zu erhalten.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplySum(accumulator, currentValue) {
    return accumulator * currentValue;
}

let result = numbers.reduce(multiplySum, 0);

console.log(result); // 3628800
```


## Aufgabe 5

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um das Gesamtprodukt aller Zahlen zu berechnen.

Korrigiere den untenstehenden Code, um das richtige Ergebnis zu erhalten.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplySum(accumulator, currentValue) {
    return currentValue;
}
 
let result = numbers.reduce(multiplySum, 0);
 
console.log(result); // 3628800
```


## Aufgabe 6

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um das Gesamtprodukt aller Zahlen zu berechnen.

Korrigiere den untenstehenden Code, um das richtige Ergebnis zu erhalten.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplySum() {
    return currentValue;
}

let result = numbers.reduce(multiplySum, 0);

console.log(result); // 3628800
```


## Aufgabe 7

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um das Gesamtprodukt aller Zahlen zu berechnen.

Wenn der aktuelle Wert 0 ist, überspringe ihn.

Korrigiere den untenstehenden Code, um das richtige Ergebnis zu erhalten.

```js
let numbers = [1, 2, 3, 4, 5, 0, 6, 7, 0, 8, 9, 10];

function multiplyTotal(accumulator, currentValue) {
  if (currentValue === 0) {
    return ;
  } else {
    return ;
  }
}

let result = numbers.reduce(multiplyTotal, 0);

console.log(result); // 3628800
```


## Aufgabe 8

Gegeben ist ein Array von Zahlen. Verwende die Reduce-Methode, um das Gesamtprodukt aller Zahlen zu berechnen.

Wenn der aktuelle Wert 0 ist, überspringe ihn.

Korrigiere den untenstehenden Code, um das richtige Ergebnis zu erhalten.

```js
let numbers = [1, 2, 3, 4, 5, 0, 6, 7, 0, 8, 9, 10];

function multiplyTotal(accumulator, currentValue) {
}

let result = numbers.reduce(multiplyTotal, 0);

console.log(result); // 3628800
```


## Aufgabe 9
 
Gegeben ist ein Array von Buchstaben. Verwende die Reduce-Methode, um sie alle zu einem String zu verbinden.

Korrigiere den untenstehenden Code, um das richtige Ergebnis zu erhalten.

```js
let letters = ["a", "b", "c"];

let result = letters.reduce((accumulator, currentValue) => {}, 0);

console.log(result); // "abc"
```
