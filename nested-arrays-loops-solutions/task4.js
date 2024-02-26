/* 
    Aufgabe 4:
    Betrachte das gegebene 2D-Array.
    Es stellt eine Tabelle mit Messwerten dar.

    Finde programmatisch den hoechsten und niedrigsten Wert innerhalb aller Messwerte und gebe diese aus.

    Erwartetes Ergebnis:
    'highestValue: 101.667; lowestValue: 0.0009'
*/

const measurements = [
    [12.65, 8, 99.1, 0.0019, 63.33, 1],
    [6.009, 64.9, 76.12, 9.121, 7.81, 14.62],
    [83.142, 35.5, 101.667, 0.0009, 39.751, 52.001],
    [48.09, 69.712, 19.716, 1.0019, 6.031, 0.21]
];

// Vergleichswerte für niedrigsten und höchsten Wert
let lowestValue = measurements[0][0];
let highestValue = measurements[0][0];

// for (let x = 0; x < measurements.length; x++) {
//     for (let y = 0; y < measurements[x].length; y++) {
//         if (measurements[x][y] < lowestValue) {
//             lowestValue = measurements[x][y];
//         }

//         if (measurements[x][y] > highestValue) {
//             highestValue = measurements[x][y];
//         }
//     }
// }

// Durchlaufe alle Messreiheneinträge
for (const measurementEntry of measurements) {
    // Durchlaufe alle Messwerte einer Messreihe
    for (const measurement of measurementEntry) {
        // Wenn jeweiliger Wert kleiner als bisher kleinster Wert -> Übernehme als kleinsten Wert
        if (measurement < lowestValue) lowestValue = measurement;

        // Wenn jeweiliger Wert größer als bisher größter Wert -> Übernehme als größten Wert
        if (measurement > highestValue) highestValue = measurement;
    }
}
console.log(`highestValue: ${highestValue}; lowestValue: ${lowestValue}`);