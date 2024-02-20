/* 
    ------------------------ Arrays ------------------------
    Ein Javascript Array ist eine Datenstruktur, die mehrere Werte unter einem gemeinsamen Namen speichert.
    Ein Array ist abstrakt gesehen eine Sequenz von aufeinanderfolgenden Werten.
    Auf diese Werte kann mit einem ganzzahligen Index zugegriffen werden.
    Die Reihenfolge der hinterlegten Daten wird durch deren Position im Array bestimmt.
*/
let farbe1 = 'rot';
let farbe2 = 'gelb';
let farbe3 = 'blau';
let farben = ['rot', 'gelb', 'blau'];

// Zugriff auf einzelne Werte im Array
farben[0] // 'rot'
farben[1] // 'gelb'
farben[2] // 'blau'

// Arrays in Javascript muessen nicht unbedingt vom selben Datentyp sein (empfiehlt sich allerdings)
let differentDataTypes = ['peter', 12, true];

// Arrays haben eine Eigenschaft 'length', die uns Auskunft ueber die Laenge des Arrays
// bzw. die Anzahl der darin gespeicherten Werte gibt.
let amountOfColors = farben.length;
console.log(`Die Anzahl der gespeicherten Farben ist ${amountOfColors}`);

// Mithilfe des indexierten Zugriffs auf einzelne Werte im Array
// lassen sich diese Werte auch veraendern
let numbers = [1,2,3,4,5,6];
numbers[0] = 12; // numbers === [12,2,3,4,5,6]


// Genau wie in Strings gibt es eine Methode zum Ermitteln des Index eines bestimmten Wertes innerhalb eines Arrays
const animals = ['dog', 'horse', 'cat', 'mouse'];
const indexOfCat = animals.indexOf('cat');
// Neue Variable mit Referenz auf den Wert 'cat' im Array 'animals'
const cat = animals[indexOfCat];

// Kann ein Wert innerhalb des durchsuchten Arrays gefunden werden,
// liefert die Methode .indexOf() -1 als Index zurueck
const indexOfParrot = animals.indexOf('parrot'); // rueckgabewert -1


// Arrays koennen in JS dynamisch erweitert werden.
// Eine Moeglichkeit bietet die Methode .push().
// Damit lassen sich beliebig viele Werte hinten an das Array anfuegen
let cities = ['Hamburg', 'Koeln'];
cities.push('Berlin');
console.log(cities); // ['Hamburg', 'Koeln', 'Berlin']
cities.push('Leipzig', 'Muenchen');
console.log(cities); // ['Hamburg', 'Koeln', 'Berlin', 'Leipzig', 'Muenchen']

// Analog zum Hinzufuegen am Ende des Arrays, 
// gibt es auch eine Methode zum Entfernen eines Elements am Ende des Arrays (die Methode .pop())
cities.pop();
console.log(cities); // ['Hamburg', 'Koeln', 'Berlin', 'Leipzig']


// Das Hinzufuegen und Entfernen von Elementen am Anfang des Arrays
// funktioniert analog zu push(neuesElement) und pop() mit den Methoden unshift(neuesElement) und shift()
cities.unshift('Magdeburg', 'Neubrandenburg');
console.log(cities); // ['Magdeburg', 'Neubrandenburg', 'Hamburg', 'Koeln', 'Berlin', 'Leipzig']

cities.shift();
console.log(cities); // ['Neubrandenburg', 'Hamburg', 'Koeln', 'Berlin', 'Leipzig']

// Das Entfernen von Elementen mittendrin funktioniert indexiert mit der Methode .splice(index, anzahlZuEntfernen)
const indexOfBerlin = 3;
cities.splice(indexOfBerlin, 1);
console.log(cities); // ['Neubrandenburg', 'Hamburg', 'Koeln', 'Leipzig']

// Das Einfuegen von Elementen mittendrin kann ebenfalls mit .splice() durchgefuehrt werden
// hierbei sollte die Anzahl der zu loeschenden Elemente auf 0 gesetzt werden
// und die einzufuegenden Elemente als weitere Parameter anhaengt werden
cities.splice(1, 0, 'Freiburg');
console.log(cities); // ['Neubrandenburg', 'Freiburg', 'Hamburg', 'Koeln', 'Leipzig']

/* 
    Da Strings streng genommen auch Arrays sind,
    lassen sich diese recht einfach in Arrays umwandeln.
    Die String-Methode .split(TRENNER) teilt anhand eines Trenners den String in einzelne Strings in einem Array auf
    Bsp.:
    let namesString = 'peter mary max sebastian hilde karla';
    let names = namesString.split(' '); // -> ['peter', 'mary', 'max', 'sebastian', 'hilde', 'karla']

*/
const courseName = 'WD_24_185'
const courseDetails = courseName.split('_'); // -> ['WD', '24', '185']
const courseStudy = courseDetails[0]; // 'WD'
const courseYear = courseDetails[1]; // '24'
const amountStudents = parseInt(courseDetails[2]); // 185 als Zahl

/* 
    Lassen sich Strings in Arrays umwandeln, macht es ja auch Sinn,
    Arrays zu Strings zusammenfuegen zu koennen.
    Die Array-Methode .join(TRENNER) fuegt alle Array-Elemente mit dem TRENNER dazwischen in einen String zusammen.
    Bsp.:
    let usernames = ['vodkaSusi123', 'spassPeterHH', 'troll1337'];
    let usernamesString = usernames.join(', '); // -> 'vodkaSusi123, spassPeterHH, troll1337'
*/
let usernames = ['vodkaSusi123', 'spassPeterHH', 'troll1337'];
let usernamesString = usernames.join(', '); // -> 'vodkaSusi123, spassPeterHH, troll1337'
console.log(usernames);
console.log(usernamesString);


/* 
    Um eine String-Repraesentation eines Arrays zu erhalten,
    kann die Array-Methode .toString() verwendet werden.
*/
const pets = ['myDog', 'yourCat', 'herMouse', 'hisHorse'];
const petsString = pets.toString();
console.log(petsString);


/* 
    Schleifen (engl. Loops) sind Anweisungsbloecke,
    die in geregelter Weise mehrmals wiederholt werden.
    Die bekannteste und einfachste davon ist die sog. for-Schleife
*/
for (let laufIndex = 0; laufIndex < 100; laufIndex++) {
    console.log(laufIndex);
}

// Schleifen eignen sich besonders gut zum durchlaufen (verarbeiten) von beliebig langen Arrays
let users = ['peter123', 'mary321', 'heinz890', 'heidrun111'];
console.log(users[0].toUpperCase());
console.log(users[1].toUpperCase());
console.log(users[2].toUpperCase());
console.log(users[3].toUpperCase());
console.log('--------------------');
for (let i = 0; i < users.length; i++) {
    console.log(users[i].toUpperCase());
}