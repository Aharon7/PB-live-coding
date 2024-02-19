/* 
    Logische Ausdruecke
*/

let isRaining = false;
let isWearingDress = true;

// Wenn es regnet UND man ein Kleid traegt, wird ein Regenschirm benoetigt.
let needAnUmbrella = isRaining && isWearingDress;
console.log(needAnUmbrella);

// Wenn es regnet ODER man ein Kleid traegt (oder beides), wird ein Regenschirm benoetigt.
let needAcoat = isRaining || isWearingDress;


/* 
    Verzweigungen
*/

// Wenn es regnet UND man ein Kleid traegt, gib aus: "Brauche Regenschirm!"
if (isRaining && isWearingDress) {
    console.log('Brauche Regenschirm!');

} else if (isWearingDress) {
    console.log('Geh raus, aber pass auf dein Kleid auf!');

} else {
    console.log("Geh doch einfach raus...");
}


/* 
    Ternaerer Operator
*/
const printOut = (isRaining && isWearingDress) ? 'Brauche Regenschirm' : 'Geh doch einfach raus...';
console.log(printOut);

// Geschachtelte Bedingungen
/* if (isHuman) {
    // Code
    if (isFemale) {
        if (isMinor) {

        }
    } else {

    }
} else {
    // Code
} */

// Ternaere Opertoren bitte NICHT als if-else Ersatz nutzen!
// Besonders bei geschachtelten Bedingungen wirds unuebersichtlich...
/* (isHuman) ? {
    // Code
    (isFemale) ? {
        (isMinor) ? {

        } : {

        }
    } : {

    }
} : {
    // Code
} */


/* 
    Switch-Verteiler
*/

let chosenColor = 'green';

if (chosenColor === 'red') {
    // Anweisungen im Fall rot

} else if (chosenColor === 'blue') {
    // Anweisungen im Fall blaue

} else if (chosenColor === 'yellow') {
    // Anweisungen im Fall gelb

} else {
    // Anweisungen, wenn keine der oberen Bedingungen zutrifft
}


switch (chosenColor) {
    case 'red': 
        // Anweisungen im Fall rot
        break; // Tritt aus dem Switch-Verteiler aus

    case 'blue':
        // Anweisungen im Fall blaue
        break;

    case 'yellow':
        // Anweisungen im Fall gelb
        break;

    default:
        // Anweisungen, wenn keine der oberen Bedingungen zutrifft
}

const amount = 10;
const chosenCurrency = 'euro';
let price = `Der zu bezahlende Preis ist `;

switch (chosenCurrency) {
    case 'euro':
        // Rechne amount irgendwie um
        price += `${amount}€`;
        break;
    case 'dollar':
        // Rechne amount irgendwie um
        price += `${amount}$`;
        break;
    case 'pounds':
        // Rechne amount irgendwie um
        price += `${amount}£`;
        break;
    default:
        price += `${amount}${chosenCurrency}`;
}

// Fall-through

const chosenCountry = 'norway';

switch (chosenCountry) {
    case 'germany':
    case 'france':
    case 'netherlands':
    case 'denmark':
    case 'poland':
        console.log("It's an EU-country");
        break;
    default:
        console.log("It's probably not an EU-country");
}


/* 
    Bei fehlender break-Anweisung wird nach dem Ausfuehren der ersten gefundenen Uebereinstimmung
    jeder weitere darunterstehende Fall ausgefuehrt.
    Haeufige Fehlerquelle...
*/
const fruit = 'orange';

switch (fruit) {
    case 'apple':
        console.log("It's an apple");
    case 'orange':
        console.log("It's an orange");
    case 'kiwi':
        console.log("It's a kiwi");
}


/* 
    Switch-Verteiler koennen in Javascript auch Wertebereich pruefen
*/
const number = 999;
switch (true) { // setze switch auf true fuer Wertebereichspruefung
    case ((number >= 0) && (number < 10)):
        console.log("Es handelt sich um eine einstellige Zahl");
        break;
    case ((number >= 10) && (number < 100)):
        console.log("Es handelt sich um eine zweistellige Zahl");
        break;
    case ((number >= 100) && (number < 1000)):
        console.log("Es handelt sich um eine dreistellige Zahl");
        break;
    default:
        break;
}

/* 
    Switch-Verteiler eignen sich nicht dafuer, 
    um einen Ausdruck/Wert auf verschiedene gleichzeitig auftretende Faelle zu pruefen
*/
const value = 61;
switch (true) { // setze switch auf true fuer Wertebereichspruefung
    case value >= 0:
        console.log("Es handelt sich um eine positive Zahl");
        break;
    case value < 10:
        console.log("Es handelt sich um eine einstellige Zahl");
        break;
    case value >= 10:
        console.log("Es handelt sich um eine zweistellige Zahl");
        break;
    case value >= 100:
        console.log("Es handelt sich mindestens um eine dreistellige Zahl");
        break;
    default:
        break;
}


/* 
    Falsy-Values
    false, undefined, null, 0, "", NaN

    Falsy-Werte koennen genutzt werden, um semantisch zu ueberpruefen, ob eine Variable
    einen Wert beinhaltet.
*/
let userInputName = NaN;

if (userInputName) console.log(`Your name has a length of ${userInputName.length}`);

// let nummer = "8plus2";
// let firstNum = nummer[0];
// let sndNum = nummer.slice(-1); // ist ein wenig uneindeutig
// console.log(firstNum, sndNum);