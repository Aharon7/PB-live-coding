/* 
    -------------------- Mehrdemensionale Arrays und verschachtelte Schleifen --------------------
*/
// Konstanten fuer die Indizes der Spalten fuer bessere Lesbarkeit des Codes
const nameColumn = 0;
const ageColumn = 1;
const cityColumn = 2;

// 2-dimensionaler Datensatz
// Erste Dimension: Komplette Eintraege
// Zweite Dimension: Die einzelnen Spalten (Werte) der Eintraege
const peopleRows = [
    ['Peter', '12 Jahre alt', 'Hamburg'],
    ['Marie', '22 Jahre alt', 'Berlin'],
    ['Lisa', '20 Jahre alt', 'Sidney'],
    ['Thomas', '33 Jahre alt', 'Magdeburg'],
];

// Referenziere gesamten ersten Eintrag in Konstante
const firstEntry = peopleRows[0];

// Referenziere Wert der Namensspalte des ersten Eintrags in Konstante
const nameOfFirstEntry = firstEntry[nameColumn];

// Referenziere Wert der Altersspalte des ersten Eintrags in Konstante
const ageOfFirstEntry = firstEntry[ageColumn];

// Referenziere Wert der Stadtspalte des ersten Eintrags in Konstante
const cityOfFirstEntry = firstEntry[cityColumn];

console.log(`Erste Zeile der Tabelle: [Name: ${nameOfFirstEntry}, Alter: ${ageOfFirstEntry}, Stadt: ${cityOfFirstEntry}]`);

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

// Verschachtelte for..of Schleife zum gesamten Durchlaufen des Datensatzes
for (const entryRow of peopleRows) {
    for (const entryCol of entryRow) {
        console.log(entryCol);
    }
    console.log('-----------------');
}
