/* 
    ---------- Array-Methoden (Mit Callback Funktion) ----------
    Callback Funktionen (kurz Callbacks) sind Funktionen, 
    die als Parameter an andere Funktionen uebergeben werden
    und im Verlauf der empfangen Funktionen aufgerufen werden.
    Die empfangende und damit sozusagen "darueberliegende" Funktion
    wird als sog. "higher-order-function" bezeichnet.

    Es gibt eine ganze Reihe von Array-Methoden, die Callbacks annehmen,
    um ihre Verwendung so flexibel wie moeglich zu machen.
*/
// Array.every(callback) ueberprueft, ob jeder der Werte im Array einen Test, der im Callback definiert ist, besteht.
// Randfall: Bei leerem Array ist das Ergebnis per Definition immer true
const numbers = [2,4,6,8];
const allEven = numbers.every((element) => element % 2 === 0);
console.log(allEven); // true

// Array.some(callback) ueberprueft analog zu every, ob mindestens einer der Werte im Array den definierten Test besteht.
// Randfall: Bei leerem Array ist das Ergebnis per Definition immer false
const names = ['peter', 'gehardt', 'angela'];
const hasNameWithP = names.some((element) => element.toLowerCase().startsWith('p'));
console.log(hasNameWithP); // true

// Array.find(callback) liefert das erste Element, das den Test im Callback erfuellt, als Rueckgabewert zurueck.
// Folgewerte, die den Test erfuellen, werden ignoriert.
// Ist kein entsprechender Wert zu finden, gibt die Methode undefined zurueck.
const nameStartingWithP = names.find((element) => element.toLowerCase().startsWith('p'));
console.log(nameStartingWithP); // peter

// Array.findIndex(callback) liefert den Index des ersten Element, das den Test im Callback erfuellt, als Rueckgabewert zurueck.
// Folgewerte, die den Test erfuellen, werden ignoriert.
// Ist kein entsprechender Wert zu finden, gibt die Methode -1 als Index zurueck.
const indexNameStartingWithP = names.findIndex((element) => element.toLowerCase().startsWith('p'));
console.log(indexNameStartingWithP); // 0


// Array.filter(callback) liefert eine Arraykopie aller Werte, die den Test im Callback erfuellen, als Rueckgabewert zurueck.
// Ist kein entsprechender Wert zu finden, gibt die Methode ein leeres Array zurueck
const randomNums = [1,2,3,4,5,6,7];
const odds = randomNums.filter((element) => element % 2 !== 0);
console.log(odds); // [1,3,5,7]


// Array.forEach(callback) fuehrt fuer jedes der Elemente im Array die Callback Funktion aus.
// Das Callback erhaelt immer das aktuelle Element, des aktuellen Index und das Array selbst.
// forEach liefert KEINEN Rueckgabewert
randomNums.forEach((element, index) => {
    console.log('index, wert:', index, element);
});


// Array.map(callback) liefert ein neues Ergebnisarray, dass aus den Ergbnissen des Callbacks fuer jedes Element besteht.
// Das Callback erhaelt immer das aktuelle Element, des aktuellen Index und das Array selbst. 
// Und muss immer einen sinnvollen Wert zurueckgeben.
const uncapitalizedNames = ['peter', 'angela', 'matthias', 'tinkerbell'];
const capitalizedNames = uncapitalizedNames.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
});
// const capitalizedNames = uncapitalizedNames.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalizedNames);
