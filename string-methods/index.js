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