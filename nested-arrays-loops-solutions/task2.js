/* 
    Aufgabe 2:
    Betrachte die gegebenen 1D-Arrays.
    Fasse sie in einer 2D-Arraystruktur sinnvoll zusammen.
*/
const petIds = [1,12,6,2,8,24];
const petNames = ['Fluffy', 'Rudi', 'Mautzi', 'Willy', 'Bello', 'Pieps'];
const petAnimalTypes = ['rabbit', 'mouse', 'cat', 'tortoise', 'dog', 'bird'];
const petWeight = ['2kg', '500g', '3.5kg', '1.2kg', '6.5kg', '200g'];

// Liste der Haustiere
const animalList = [];

// Durchlaufe die gesamte Länge aller Haustier Informationen
for (let i = 0; i < petIds.length; i++) {
    // Konstruiere Haustiereintrag als neues Array
    const animalEntry = [petIds[i], petNames[i], petAnimalTypes[i], petWeight[i]];

    // BONUS: Wandle das erste Element in einen String um
    animalEntry[0] = animalEntry[0].toString();
    
    // Füge Haustiereintrag in Liste der Haustiere hinzu
    animalList.push(animalEntry);
}
console.log(animalList);