/* 
    -------------------- Math Methoden -------------------- 
    Javascript bietet eine Vielzahl von eingebauten Funktionen.
    Darunter befinden sich auch welche für mathematische Operationen.
    Diese bezeichnet man als "Methoden" der "Klasse" "Math".
*/
// Math.floor() - Grundsätzliches Abrunden einer Dezimalzahl (Kommazahl)
console.log(Math.floor(3.14)); // -> Ergebnis: 3
console.log(Math.floor(3.8)); // -> Ergebnis: 3
console.log(Math.floor(3)); // -> Ergebnis: 3

// Math.ceil() - Grundsätzliches Aufrunden einer Dezimalzahl (Kommazahl)
console.log(Math.ceil(3.14)); // -> Ergebnis: 4
console.log(Math.ceil(3.8)); // -> Ergebnis: 4
console.log(Math.ceil(3)); // -> Ergebnis: 3 - Besonderheit: Bei 3.0 gibts nichts aufzurunden. Bleibt also 3.

// Math.round() - Runden nach den herkömmlichen Rundungsregeln (>0.5 -> Aufrunden) (<0.5 -> Abrunden)
console.log(Math.round(3.14)); // -> Ergebnis: 3
console.log(Math.round(3.8)); // -> Ergebnis: 4
console.log(Math.round(3)); // -> Ergebnis: 3


// Math.random() - Erstellen einer Zufallszahl zwischen 0 und <1 (Dezimalzahl).
console.log(Math.random()); // -> 0.0, 0.1, 0.2, ..., 0.9

// Ermittle Zufällige Zahl im größeren Bereich mit Obergrenze
// Formel: Math.random() * Obergrenze
console.log(Math.random() * 12);

// Um aus daraus Ganzzahlen zu bekommen, müssen wir den Dezimalteil (alles hinterm Komma) abschneiden
console.log(Math.floor(Math.random() * 3)); // Schließt die Obergrenze aus, weil immer abgerundet wird
console.log(Math.ceil(Math.random() * 3)); // Schließt die Obergrenze mit ein, weil immer aufgerundet wird


// Möchte man einen Bereich für die Zufallszahlen definieren,
// ist die Formel: Math.random() * (max - min) + min
const min = 3;
const max = 9;
console.log(Math.random() * (max-min) + min);

// Daraus eine Ganzzahl zu bekommen, können wir wieder mit Math.floor oder Math.ceil arbeiten
const randomRanged = Math.random() * (max-min) + min;
const intRandomRanged = Math.floor(randomRanged);
console.log(randomRanged, intRandomRanged);