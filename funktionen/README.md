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