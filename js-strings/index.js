/* ------------------- Strings in Javascript -------------------*/
/* 
    Zeichenketten bezeichnet man als "Strings".
    In Javascript gibt einen Datentypen dafür mit dem Namen "string".
    Strings werden auf drei Arten angelegt:
    1. Mit Anführungszeichen (doppelte Hochkomma) -> "Peter Pan"
    2. Mit Apostophs (einfache Hochkomma) -> 'Peter Pan'
    3. Mit Accents (sog. Backticks) -> `Peter Pan`
        -> Werden verwendet, wenn man Werte von Variablen o.ä. in den String einfügen möchte.
        Man spricht auch von "templated string literals".
*/

console.log("Peter Pan");
console.log('Peter Pan');

// Die Schreibweisen sollten möglichst nicht vermischt werden:
// console.log("Peter Pan'); -> "unterminated string literal" also Stringausdruck nicht geschlossen
// console.log('Peter Pan"); -> "unterminated string literal" also Stringausdruck nicht geschlossen

// Die Apostrophs können als tatsächliches Zeichen in einem mit Anführungszeichen gesetzten String verwendet werden:
console.log("Marianne's Eckkneipe");
// Geht aber auch andersrzum:
console.log('Thomas sagt: "Hey du da!"');

/* 
    templated string literals 
   Wir können uns Texttemplates schreiben, die Platzhalter für veränderliche Werte vorsehen.
   Diese Platzhalter werden mit folgender Syntax angelegt: `${variable/ausdruck/wert}`
*/
const username = 'Mary Poppins';
console.log(`Hallo, mein Name ist ${username}.`);

// In den templates lassen sich auch Ausdrücke schreiben:
console.log(`Danke für Ihren Besuch. Das macht dann ${12 + 4}€.`);

const priceBreakfast = 12;
const priceCoffee = 4;
console.log(`Danke für Ihren Besuch. Das macht dann ${priceBreakfast + priceCoffee}€.`);


/* 
    String-Zusammensetzung (engl. string concatination):
    Es ist möglich mit einem "+" Strings zusammenzusetzen, so dass daraus ein einzelner String wird.
*/
const greeting = 'Hey ';
const person = 'Peter';
const fullGreet = greeting + person;
console.log(greeting + person);

// String concatination mit + eignet sich nicht zum Zusammensetzung komplexer Texte.
const price = 24;
const personName = 'Mary';
const age = 12;
console.log("Hallo " + personName + "! Ich bin " + age + " Jahre alt. Kannst du bitte meine Rechnung von " + price + "€ bezahlen?");
console.log(`Hallo ${personName}! Ich bin ${age} Jahre alt. Kannst du bitte meine Rechnung von ${price}€ bezahlen?`);
const currency = '€';
console.log(price+currency);
const firstName = 'Peter';
const lastName = 'Pan';
const fullName = firstName + ' ' + lastName;
// const fullName = `${firstName} ${lastName}`;
console.log(fullName);