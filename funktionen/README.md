# Funktionen
Möchten wir bestimmte Codeteile/Anweisungsblöcke auf Abruf an bestimmten Stellen aufrufen,
können wir diesen in sog. "Funktionen" verpacken und bei Bedarf aufrufen.
## Syntax
```js
function nameDerFunktion(parameter1, parameter2) {
    // Anweisungen...

    // ggf. Rückgabe der Funktion
    return rückgabewert;
}
```

### Funktionssignatur
Javascript unterscheidet Funktionen anhand ihrer sog. "Signatur" voneinander.
Die Signatur setzt normaler zusammen aus: `Funktionsname + Funktionsparameter`.

In Javascript hingegen sind Parameter grundsätzlich optional (können beim Aufruf also weggelassen werden) weshalb nur der `Funktionsname` die Signatur ausmacht.

## Funktionen vs. Prozeduren
Während Prozeduren mit evtl. Eingabewerten irgendwas machen und damit beendet sind,
liefern Funktion laut Definition zusätzlich einen explizites Ergebnis, einen sog. "return Wert" (Rückgabewert).
Bsp.:
```js
// Am Beispiel eines Spiels
// Prozedur - Führt einfach einige Anweisungen aus
function printGameOver() {
    console.log('Spiel beendet. Danke fürs Teilnehmen.');
}

// Funktion - Führt Anweisungen aus und gibt einen Rückgabewert
function printGameOverAndScore() {
    console.log('Spiel beendet. Danke fürs Teilnehmen.');
    return 100;
}
```
## Funktionsparameter
Funktionsparameter sind Eingabewerte für die Funktion,
die für die Verarbeitung der Funktion notwendig sind.
Sie haben innerhalb der Funktion ihren eigenen Geltungsbereich (Scope).
Bsp.:
```js
// Funktion add nimmt zwei Parameter zum Addieren auf
function add(firstOperand, secondOperand) {
    // Gebe als Rückgabewert die Summe der zwei Parameter zurück
    return firstOperand+secondOperand;
}
```
Funktionsparameter sind in Javascript grundsätzlich _optional_.
D.h. sie können beim Aufruf weggelassen werden, so dass wir manuell innerhalb der Funktion prüfen müssten, ob diese überhaupt vorhanden sind.
```js
function greetUser(username) {
    console.log(`Welcome ${username}!`);
}
greetUser(); // Welcome undefined!

// Mit Parameterprüfung
function greetUser(username) {
    if (username) {
        console.log(`Welcome ${username}!`);
    } else {
        console.log(`Hello Anonymous!`);
    }
}
greetUser('Peter'); // Welcome Peter!
greetUser(); // Hello Anonymous!
```

## Funktionshoisting
Ähnlich wie bei Variablen, können Funktionen auch weiter unten im Code definiert werden.
Allerdings ist der Code nicht darauf angewiesen, dass bereits etwas initialisiert wurde.
Bsp.:
```js
printToConsole('Hallo Welt!'); // 'Hallo Welt'

// Funktion wird erst ausgeführt, wenn sie aufgerufen wird
function printToConsole(msg) {
    console.log(msg);
}

```

## Funktionen als Ausdrücke (Function expressions)
Funktionen kann in Javascript grundsätzlich einer Variable o.ä. auch als Wert zuweisen.
```js
function hello() {
    // Anweisungen
}

const func = hello;
func();
```

### Anonyme Funktionen
Als _anonym_ bezeichnet man Funktionen ohne Namen.
Diese werden oft kurzzeitig mittendrin eingefügt oder auch direkt als Wert einer Konstanten/Variable zugewiesen, die ab dann als Funktionsname fungieren.
```js
const anonFunction = function() {
    // Code...
}
```
Der Wert der Konstante "anonFunction" ist eine Funktion, die von sich aus allerdings anonym ist.
Jetzt können wir die Konstante als den neuen Namen der Funktion ansehen.
```js
anonFunction();
```

## Funktionsparameter
Funktionen können auch als Parameter übergeben werden.
Dabei wird eine Referenz auf die jeweiligen Funktion übermittelt.
```js
function countToTenAndNotify(callbackFunction) {
    for (let i = 1; i <= 10; i++) {
        // Code
    }

    // Führe dynamisch auswechselbaren Code aus
    callbackFunction();
}

function notifyUser() {
    console.log('Counted to 10...')
}

countToTenAndNotify(notifyUser);
```

## Arrow Functions
Als weitere Syntax für Funktionen gibt es auch die sog. "Arrow-Functions".
Diese fallen in der Regel besonders kurz aus, weswegen sie sich großer Beliebtheit erfreuen.
Syntax:
```js
(PARAMETER) => {
    ANWEISUNGEN
};

// Ist die Funktion lediglich ein return-Einzeiler,
// kann man die geschweiften Klammern und das return-Keyword weglassen
(a,b) => a+b;
// ist die Kurzschreibweise für
(a,b) => {
    return a+b;
};

// Hat man nur einen Parameter, kann man die runden Klammern weglassen
name => {
    return name.toUpperCase();
};
name => name.toUpperCase();
```