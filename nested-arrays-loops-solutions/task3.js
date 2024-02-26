/* 
    Aufgabe 3:
    Betrachte das gegebene 2D-Array.
    Es handelt sich um eine Sammlung von X- und Y-Koordinaten.

    Drucke den Inhalt so ins Terminal, dass jede Zeile und jede Spalte sinnvoll beschriftet ist.
    Nutze dafuer eine verschachtelte for-Schleife. <--- ÄHM WIE BITTE?!
    
    Erwartetes Ergebnis:
    Koordinaten Nr. 1 = {x: 21.222; y:10.01}
    Koordinaten Nr. 2 = {x: 19.98; y:11.2}
    Koordinaten Nr. 3 = {x: -15.00; y:9.81}
    Koordinaten Nr. 4 = {x: -5.21; y:12.0}
    Koordinaten Nr. 5 = {x: 9.62; y:10.52}
    Koordinaten Nr. 6 = {x: 2.44; y:11.0}
    Koordinaten Nr. 7 = {x: 7.005; y:9.67}
    Koordinaten Nr. 8 = {x: -9.81; y:11.997}
*/
const coordinates = [
    [21.222, 10.01],
    [19.98, 11.2],
    [-15.00, 9.81],
    [-5.21, 12.0],
    [9.62, 10.52],
    [2.44, 11.0],
    [7.005, 9.67],
    [-9.81, 11.997],
];

// Durchlaufe alle Koordinateneinträge
for (let i = 0; i < coordinates.length; i++) {
    // Extrahiere jeweiligen Koordinateneintrag in Konstante
    const coordinate = coordinates[i];

    // Extrahiere x-Koordinate aus jeweiligem Eintrag
    const xCoord = coordinate[0];

    // Extrahiere y-Koordinate aus jeweiligem Eintrag
    const yCoord = coordinate[1];

    // Drucke den erwarteten String mit eingesetzten Werten aus
    console.log(`Koordinaten Nr. ${i+1} = {x: ${xCoord}; y: ${yCoord}}`);
}