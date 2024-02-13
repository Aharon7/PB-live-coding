/* 
    String als Javascript Klasse.
    String ist in Javascript als "Klasse zu verstehen".
    Diese haben natürlich auch Methoden.
    Intern werden Strings als Ketten von Einzelzeichen gespeichert,
    sodass nun jedem Zeichen in einem String
    ein Index als (Ordnungszahl) zugeordnet werden kann.
    'peter' ->  ['p', 'e', 't', 'e', 'r']
    index:        0    1    2    3    4
*/

// Mit der []-Syntax kommen wir an die einzelnen Zeichen eines Strings heran.
// Syntax string[index] = das Zeichen im String am Index
const newName = 'peter';
console.log(newName[0]); // Gibt das erste Zeichen des Strings von newName aus

// Jeder String hat von Natur aus auch eine Länge
// Die String-Klasse gibt uns vereinfacht darauf Zugriff
console.log('Length of name:', newName.length);


const password = 'geheim';
const minLength = 8;
// Prüfe, ob die Länge eines Strings einem Mindestmaß entspricht
console.log(password.length >= minLength);

// Ermittle den letzten Index eines Strings
const lastIndex = newName.length-1;

// Finde anhand des letzten Index das letzte Zeichen eines Strings
const lastChar = newName[lastIndex];
console.log('last character:', lastChar);

// ------------------- Methoden --------------------
// Die String-Klasse hat einige eingebaute Methoden
// z.B. für den Zugriff auf ein bestimmtes Zeichen per Index
const someString = 'Hello World';
console.log('Character at index 0:', someString.charAt(0));

console.log(typeof someString.charAt(99));
console.log(typeof someString[99]);

// const charAt99 = someString[99];
const charAt99 = someString.charAt(99);
console.log(charAt99.length);


// Finde spezielle (Unter-)Zeichenkette
/* 
    String.indexOf(Zeichenkette) liefert uns den Index des ersten Zeichens des Suchbegriffs im durchsuchten String.
*/
const exampleString = 'Hallo Welt! Ich bin absolut bereit für Javascript!';
const searchTerm = 'Javascript';
const indexOfTerm = exampleString.indexOf(searchTerm, 12);
console.log('Index of search term:', indexOfTerm);

/* 
    Zusätzlich können wir durch Angabe eines eines Index als zweiten Parameter bestimmen, 
    ab welcher Position im durchsuchten String gesucht werden soll.
*/
const someText = 'Hallo, ich bin Peter. Mein Name ist Peter. Ihr dürft mich Peter nennen.';
const firstOccurance = someText.indexOf('Peter');
const nextOccurance = someText.indexOf('Peter', firstOccurance+1);
const lastOccurance = someText.lastIndexOf('Peter');
console.log(`firstOccurance: ${firstOccurance}; nextOccurance: ${nextOccurance}; lastOccurance: ${lastOccurance}`);

/* 
    Findet indexOf den gesuchten String NICHT. Wird uns als Index eine -1 zurückgegeben.
*/
const nonExistentTerm = 'Mary';
const indexOfNonExistent = someText.indexOf(nonExistentTerm);
console.log('index of nonExistentTerm:', indexOfNonExistent);

const iban = 'DE75512108001245126199';
const indexOfCc = iban.indexOf('DE');
console.log(`Die gegebene IBAN ist eine deutsche IBAN: ${indexOfCc !== -1}`);


/* 
    String.includes prüft, ob eine gesuchte Zeichen innerhalb einer durchsuchten Zeichkette vorhanden ist
    und liefert entsprechend true oder false zurück.
    Sagt also NUR AUS, ob der gesuchte String überhaupt enthalten ist. NICHT WO.
*/
const germanCcFound = iban.includes('DE');
console.log(`Die gegebene IBAN ist eine deutsche IBAN: ${germanCcFound}`);

/* 
    String.startsWith prüft, ob der durchsuchte String, mit einer gesuchten Zeichenkette beginnt.
*/
const startsWithGermanCc = iban.startsWith('DE');
console.log(`Die gegebene IBAN ist eine deutsche IBAN: ${startsWithGermanCc}`);

// Es lässt sich auch eine Startposition angeben
const mobilePhoneNumber = '+491761231231';
const isAnO2number = mobilePhoneNumber.startsWith('176', 3);
console.log(`Bei der Mobiltelefonnummer handelt es sich um eine von o2 ausgestellte Nummer: ${isAnO2number}`);

/* 
    String.endsWith prüft, ob der durchsuchte String, mit einer gesuchten Zeichenkette endet.
*/
let url = 'www.google.de';
let isGermanDomain = url.endsWith('.de');
console.log(`Es handelt sich um eine deutsche Internetadresse: ${isGermanDomain}`);

// Es lässt sich auch eine Endposition bis zu der gesucht wird angeben
url = 'www.google.de/search?q=sdfsdfsdf';
const indexOfSlash = url.indexOf('/');
isGermanDomain = url.endsWith('.de', indexOfSlash);
console.log(`Es handelt sich um eine deutsche Internetadresse: ${isGermanDomain}`);


/* 
    Case-Sensitivity bedeutet, dass Groß- und Kleinschreibung berücksichtigt werden.
    Sucht man also nach einer bestimmten Zeichenkette, kann es sein, dass sie nicht gefunden wird,
    weil die Groß- und Kleinschreibung abweicht.
*/
const letter = 'Hallo Thomas! Ich hoffe, der Urlaub mit der Familie war der Kracher. Wenn nicht, auch gut.';
const includesHoliday = letter.includes('urlaub');
console.log('includesHoliday:', includesHoliday);

const movieTitle = 'Und dann kam Polly';
let includesAnd = movieTitle.includes('und');
console.log('includesAnd:', includesAnd);

/* 
    Da das Durchsuchen von Strings mit Groß- und Kleinschreibung zum Problem werden kann,
    lassen sich Strings auch "normalisieren". 
    Man kann entweder komplett in Kleinbuchstaben umwandeln mit .toLowerCase()
    oder komplett in Großbuchstaben mit .toUpperCase().
    Beide Methoden liefern eine umgewandelte Kopie des String als Rückgabewert,
    ändern das Original also nicht.
*/
const lowerCasedMovieTitle = movieTitle.toLocaleLowerCase();
console.log(lowerCasedMovieTitle);
includesAnd = lowerCasedMovieTitle.includes('und');
console.log('includesAnd:', includesAnd);

const upperCasedMovieTitle = movieTitle.toUpperCase();
console.log(upperCasedMovieTitle);


/* 
    Substrings sind Ausschnitte aus einer längeren Zeichenkette.
    Meistens als Kopie entnommen.
    Die String Klasse sieht mehrere Methoden dafür vor, diese zu erhalten.
*/

// String.slice() liefert einen Ausschnitt (Substring) als Kopie zurück.
// Dabei nimmt sie den Startindex ab dem Kopiert werden soll als Parameter
// und optional auch einen Endindex bis zu dem kopiert werden.
const fullName = 'John Doe';
const indexOfSpace = fullName.indexOf(' ');
const firstName = fullName.slice(0, indexOfSpace);
console.log('firstname:', firstName);

const lastName = fullName.slice(indexOfSpace+1);
console.log('lastName:', lastName);
