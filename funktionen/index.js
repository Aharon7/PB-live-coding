/* 
    ------------------------ Funktionen ------------------------
*/
// Funktion add nimmt zwei Parameter zum Addieren auf
function add(firstOperand, secondOperand) {
    // Gebe als Rückgabewert die Summe der zwei Parameter zurück
    return firstOperand+secondOperand;
}

const result = add(1, 2);
console.log(result);

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = add(sum, i);
}
console.log(sum);


/* 
    Betrachte die gegebenen 1D-Arrays.
    Fasse sie in einer 2D-Arraystruktur sinnvoll zusammen.
*/
const petIds = [1,12,6,2,8,24];
const petNames = ['Fluffy', 'Rudi', 'Mautzi', 'Willy', 'Bello', 'Pieps'];
const petAnimalTypes = ['rabbit', 'mouse', 'cat', 'tortoise', 'dog', 'bird'];
const petWeight = ['2kg', '500g', '3.5kg', '1.2kg', '6.5kg', '200g'];

// Liste der Haustiere
const animalList = buildPetArray();

// Durchlaufe die gesamte Länge aller Haustier Informationen
// for (let i = 0; i < petIds.length; i++) {
    // Konstruiere Haustiereintrag als neues Array
    // const animalEntry = buildAnimalEntry(petIds[i], petNames[i], petAnimalTypes[i], petWeight[i]);

    // Rufe Funktion zum Umwandeln von numerischen IDs in Strings auf
    // und speichere Ergenis an erster Stelle des Arrays
    // animalEntry[0] = castIdToString(animalEntry[0]);
    
    // Füge Haustiereintrag in Liste der Haustiere hinzu
    // animalList.push(animalEntry);


    // buildAndAppendPetEntry(petIds[i], petNames[i], petAnimalTypes[i], petWeight[i]);
    // buildAndAppendPetEntry(petIds[i], petNames[i], petAnimalTypes[i], petWeight[i], animalList);
// }
console.log(animalList);


function buildAndAppendPetEntry(petId, petName, petAnimalType, petWeight) {
    // Konstruiere Haustiereintrag als neues Array
    const animalEntry = buildAnimalEntry(petId, petName, petAnimalType, petWeight);

    // Füge neuen Eintrag zum äußeren Ergebnisarray hinzu
    animalList.push(animalEntry);
}

function buildAndAppendPetEntry(petId, petName, petAnimalType, petWeight, resultArray) {
    // Konstruiere Haustiereintrag als neues Array
    const animalEntry = buildAnimalEntry(petId, petName, petAnimalType, petWeight);

    // Füge neuen Eintrag zum übergebenen Ergebnisarray hinzu
    resultArray.push(animalEntry);
}

function buildPetArray() {
    // Erstelle neues leeres Array für die Liste der Haustiere (Ergebnisarray)
    const resultPetList = [];

    // Durchlaufe alle Haustierdaten
    for (let i = 0; i < petIds.length; i++) {
        // Erstelle neuen Haustiereintrag und füge zum Ergebnisarray hinzu
        buildAndAppendPetEntry(petIds[i], petNames[i], petAnimalTypes[i], petWeight[i], resultPetList);
    }

    // Gebe neu-erstellte Liste der Haustiere als Rückgabewert zurück
    return resultPetList;
}


function buildAnimalEntry(petId, petName, petAnimalType, petWeight) {
    return [castIdToString(petId), petName, petAnimalType, petWeight];
}

function castIdToString(numericId) {
    return numericId.toString();
}


function generateRandomNumber(lowerBound, upperBound) {
    const boundsDiff = upperBound - lowerBound;
    const randomNum = Math.round((Math.random() * boundsDiff)) + lowerBound;
    return randomNum;
}

function genRgbString(rgbValues) {
    return `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
}

function generateRandomRgbValues() {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(generateRandomNumber(0, 255));
    }

    return rgb;
}


const randomRgbValues = generateRandomRgbValues();
console.log(`Random RGB: ${genRgbString(randomRgbValues)}`);


// Definition der Funktion "someFunc"
function someFunc(param1, param2) {
    console.log(`someFunc(${param1}, ${param2})`);
}
// Unter der Haube in etwa das hier
// let someFunc = function(param1, param2) {
// };

// Neudefinition der Funktion "someFunc" (die alte wird ungültig)
function someFunc() {
    console.log("someFunc()");
}
// Unter der Haube in etwa eine Neuzuweisung
// someFunc = function() {
// }

// Hier wird also nur die zweite Definiton der Funktion ausgeführt (Die Parameter werden ignoriert)
someFunc("peter", "pan");


// Function expressions
function hello() {
    console.log('Hello...');
}

const func = hello;
func();

// Anonyme Funktion
const anonFunc = function() {
    console.log("Eigentlich eine anonyme Funktion als Wert der Konstante anonFunc zugewiesen");
}
anonFunc();


// Funktionparameter
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

function beleidigeUser() {
    console.log('Du bist doof!');
}

countToTenAndNotify(notifyUser);
countToTenAndNotify(beleidigeUser);


function get10() {
    console.log('Returning number 10');
    return 10;
}

const ten = get10();
function callAnotherFuntion(callback) {
    // Wenn callback einen Wert hat
    if (callback && typeof callback === 'function') {
        // Rufe callback als Funktion auf
        callback();
    } else {
        console.log("Parameter callback ist offenbar keine Funktion, die man aufrufen könnte...");
    }
}
callAnotherFuntion(get10);

callAnotherFuntion(function() {
    console.log('hihi bin ne anonyme callback function');
});

// const arr = [12,1,2];
// arr.forEach(function (item) {
//     console.log(item);
// });
// arr.forEach(function (item) {
//     console.log(item*2);
// });


// function printNameCapitalized(name) {
//     return name[0].toUpperCase()+name.slice(1);
// }
const printNameCapitalized = name => name[0].toUpperCase()+name.slice(1);

console.log(printNameCapitalized('peter'));

