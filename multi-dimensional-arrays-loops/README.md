# Mehrdemensionale Arrays und verschachtelte Schleifen
## Mehrdimensionale Arrays
Eindimensionale Arrays kennen wir bereits als "normale" Arrays mit einer festen Laenge und simplen Werten als Elemente.
Bsp.:
```js
const numbers = [1,2,3,4,5,6];
```

Fuegt man als Elemente in das **ein**dimensionale Array nun weitere Arrays hinzu, erhaelt man ein **zwei**dimensionales Array.
Bsp.:
```js
const rows = [
    [1,2,3,4], // erstes Element des Arrays 'rows' - index 0
    [5,2,1,8], // zweites Element des Arrays 'rows' - index 1
    [12,21,6,1] // drittes Element des Arrays 'rows' - index 2
];
```
Diese Verschachtelung laesst rein theoretisch unendlich weiterfuehren.
Bsp. 3D-Array:
```js
const threeDim = [ // auesseres Array - erste Dimension
    [ // erstes inneres Array - zweite Dimension
        [1,2,3], // zweites inneres Array - dritte Dimension
        [3,2,1]
    ],
    [
        [12,5,2],
        [3,7,1]
    ]
];
const five = threeDim[1][0][1];
```

### Verschachtelter Zugriff
Der Zugriff auf innere Werte erfolgt in verschachtelter Art und Weise.
Bsp.:
```js
// 2D
const rows = [
    [1,2,3,4], // erstes Element des Arrays 'rows' - index 0
    [5,7,1,8], // zweites Element des Arrays 'rows' - index 1
    [12,21,6,1] // drittes Element des Arrays 'rows' - index 2
];
const firstInnerOfFirstOuter = rows[0][0]; // === 1
const secondInnerOfFirstOuter = rows[0][1]; // === 2
const secondInnerOfThirdOuter = rows[2][1]; // === 21

// 3D
const threeDim = [ // auesseres Array - erste Dimension
    [ // erstes inneres Array - zweite Dimension
        [1,2,3], // zweites inneres Array - dritte Dimension
        [3,2,1]
    ],
    [
        [12,5,2],
        [3,7,1]
    ]
];
const five = threeDim[1][0][1];
```

Auch die erste Dimension laesst sich natuerlich wie gehabt referenzieren und erleichtert uns bei verschachtelter Referenzierung evtl. das Leben:
```js
const nameColumn = 0;
const ageColumn = 1;
const cityColumn = 2;

const rows = [
    ['Peter', '12 Jahre alt', 'Hamburg'],
    ['Marie', '22 Jahre alt', 'Berlin'],
    ['Lisa', '20 Jahre alt', 'Sidney'],
];

const firstEntry = rows[0];
const nameOfFirstEntry = firstEntry[nameColumn];
const ageOfFirstEntry = firstEntry[ageColumn];
const cityOfFirstEntry = firstEntry[cityColumn];
```

## Verschaltelte Schleifen
Passend zu ineinander geschachtelten Arrays gibt es auch die Moeglichkeit,
Schleifen ineinander zu schachteln; also innerhalb eines Schleifendurchlaufs eine weitere Schleife komplett auszufuehren.
Bsp. Multiplikationstabelle:
```js
for (let i = 1; i <= 10; i++) {
    console.log(`---- Das ein mal ${i} ----`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

    console.log('\n'); // Neue Zeile als Abstand
}
```

Verschachtelte for-Schleifen eignen sich dementsprechend auch besonders gut dafuer, verschachtelte Arrays zu durchlaufen:
```js
// 2-dimensionaler Datensatz
// Erste Dimension: Komplette Eintraege
// Zweite Dimension: Die einzelnen Spalten (Werte) der Eintraege
const peopleRows = [
    ['Peter', '12 Jahre alt', 'Hamburg'],
    ['Marie', '22 Jahre alt', 'Berlin'],
    ['Lisa', '20 Jahre alt', 'Sidney'],
    ['Thomas', '33 Jahre alt', 'Magdeburg'],
];
```
Entweder mit Ruecksicht auf die Indizes mit zwei klassischen ineinander geschachtelten for-Schleifen
```js
// Durchlaufe das auessere Array mit den Zeilen (Eintraege)
for (let x = 0; x < peopleRows.length; x++) {
    // Referenziere gesamten Eintrag in Konstante
    const entryRow = peopleRows[x]; // ist ein Array
    
    // Durchlaufe das innere Array des Eintrags
    for (let y = 0; y < entryRow.length; y++) {
        // Referenziere jeweilige Spalte des Eintrags
        const entryCol = entryRow[y];

        // Gebe Wert in der jeweiligen Spalte aus
        console.log(entryCol);
    }

    console.log('-----------------');
}
```
Oder, wenn fortlaufende Indizes eigentlich nicht relevant sind, mit zwei ineinander geschachtelten for..of-Schleifen
```js
// Verschachtelte for..of Schleife zum gesamten Durchlaufen des Datensatzes
for (const entryRow of peopleRows) {
    for (const entryCol of entryRow) {
        console.log(entryCol);
    }
    console.log('-----------------');
}
```