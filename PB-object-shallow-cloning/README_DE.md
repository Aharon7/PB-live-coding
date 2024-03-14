# Flaches Klonen

## Aufgabe 1

Gegeben sei ein Array von Produkten namens `cart` und ein Produktobjekt `hatProduct`:

```javascript
const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  }
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};
```

Erstelle eine Funktion namens `addProduct`, die das `cart`-Array und das `hatProduct`-Objekt als Parameter erhält.

Die Funktion sollte das neue Produkt am Ende des Arrays hinzufügen und den aktualisierten Warenkorb zurückgeben.

Stelle sicher, dass der ursprüngliche Warenkorb nicht verändert wird. Nach dem Aufruf der Funktion sollte `cart` also weiterhin nur 2 Produkte enthalten und die Funktion ein neues Array mit 3 Produkten zurückgeben.

## Aufgabe 2

Gegeben sei ein Array `tasks`, das eine Reihe von Objekten enthält:

```javascript
const tasks = [
    {
        task: "clean apartment",
        priority: 5
    },
    {
        task: "learn objects",
        priority: 2
    },
    {
        task: "practice JavaScript",
        priority: 1
    }
]
```

Erstelle eine Funktion namens `finishTask`, die:

- ein Array von Aufgaben als Parameter erhält
- das letzte Element aus dem Array entfernt
- das aktualisierte Array zurückgibt

Das ursprüngliche Aufgaben-Array darf nicht verändert werden.

## Aufgabe 3

Gegeben sei ein Objekt `person`:

```javascript
const person = {
    firstName: "James",
    lastName: "Ensor",
    age: 13
}
```

Erstelle eine Funktion namens `addFullName`, die ein Objekt als Parameter erhält und diesem eine neue Eigenschaft namens `fullName` hinzufügt.

Die Funktion gibt die modifizierte Version des Objekts zurück. Die Eigenschaft sollte `firstName` und `lastName` zusammenfügen.

Das ursprüngliche `person`-Objekt darf nicht verändert werden.

## Aufgabe 4

Gegeben sei das Array von Produktobjekten:

```js
const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  ...
 ];
```

Erstelle eine Funktion namens `applyDiscount`, die ein Array von Produktobjekten und einen Rabattwert als Parameter erhält.

Die Funktion sollte den Rabatt auf alle Produkte im Array anwenden.

Die Funktion gibt dann das Array mit den rabattierten Preisen zurück.

**WICHTIG**: Das ursprüngliche Array darf nicht verändert werden.

Formel zur Berechnung eines Rabatts:

```plaintext
discountedPrice = price - (price * discount / 100);

20% Rabatt auf 100€:
100 - (100 * 20 / 100) -> 100 - (200 / 100) -> 100 - 20 -> 80


15% Rabatt auf 70€:
70 - (70 * 15 / 100) -> 70 - (1050 / 100) -> 70 - 10.5 -> 59.5 
```
