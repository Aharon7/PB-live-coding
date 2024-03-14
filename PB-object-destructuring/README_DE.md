# Destructuring


## Aufgabe 1

7 Personen haben an einem Marathon teilgenommen.

Du hast ein Array namens `results`, das die Namen der Teilnehmer in der Reihenfolge enthält, in der sie den Marathon beendet haben: links diejenigen, die zuerst ankamen.

```javascript
const results = ["Sylvia", "Mike", "Kat", "Jeff", "Cindy", "Brandon", "Dylan"];
```

Deine Aufgabe ist es, die Personen, die den ersten, zweiten und dritten Platz belegt haben, in separaten Variablen zu speichern.

Speichere die restlichen Namen als Array in einer separaten Variable.

Gib die Ergebnisse in der Konsole aus.

Erwartete Ausgabe:

```plaintext
Erster: Sylvia
Zweiter: Mike
Dritter: Kat
Rest: [ 'Jeff', 'Cindy', 'Brandon', 'Dylan' ]
```

## Aufgabe 2

Gleich wie `Aufgabe 1`, aber mit Objekten anstelle von Strings

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

Deine Aufgabe ist es, die Personen, die den ersten, zweiten und dritten Platz belegt haben, in separaten Variablen zu speichern.

Speichere die restlichen Namen als Array in einer separaten Variable.

Gib den vollständigen Namen (Vorname und Nachname) des Gewinners in der Konsole aus.

Erwartete Ausgabe:

```plaintext
Gewinner: Sylvia Sound
```

## Aufgabe 3

Du hast ein Array, das die Grundzutaten für eine Pizza enthält, zusammen mit einigen optionalen Belägen.

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

// console.log("Beläge:", toppings); // Beläge: [ 'mushrooms', 'onion', 'pepper', 'eggplant' ]
```

Mit Hilfe der Destructuring-Zuweisung speichere die ersten 3 Hauptzutaten in separaten Variablen.

Speichere die Beläge (von Pilzen bis Auberginen) in einem Array namens toppings.

Gib die Beläge als String in der Konsole aus, wobei jeder Belag durch ein Komma getrennt ist.

Erwartete Ausgabe:

```plaintext
Beläge: mushrooms, onion, pepper, eggplant
```

## Aufgabe 4

Du hast ein Objekt mit Informationen über ein Haustier.

```javascript
const pet = {
  name: "Bob",
  type: "cat",
  color: "orange",
  age: 3,
};

// Dein Code hier

console.log("Art:", type);
console.log("Alter:", age);
```

Mit Hilfe der Destructuring-Zuweisung speichere `type` und `age` in 2 separaten Variablen und gib sie in der Konsole aus

Erwartete Ausgabe:

```plaintext
Art: cat
Alter: 3
```

## Aufgabe 5


Schreibe eine Funktion, die ein Person-Objekt als Argument akzeptiert und einen String mit dem vollständigen Namen (Vorname + Nachname) zurückgibt

Verwende in der Funktion die Destructuring-Zuweisung, um nur die Eigenschaften zu erhalten, die du benötigst


```javascript
const person = {
  firstName: "Jim",
  lastName: "Saul",
  age: 34,
  profession: "lawyer",
};

```



