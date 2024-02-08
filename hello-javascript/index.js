/* 
    Variablen
    Ein Platzhalter für Werte allerlei Datentypen.
*/
// Alte Schreibweise Variablen -> Schlüsselwort var [Bezeichner] = [Wert];
var number = 1; // Numerischer Wert
var character = 'a'; // Zeichen als Wert
var string = 'abc'; // Zeichenkette als Wert
var anotherString = "cba"; // Zeichenkette angeführt mit doppelten Anführungszeichen
var boolean = true; // false // Wahrheitswert (Wahr oder Falsch)

// Neue Syntax Variablen -> Schlüsselwort let [Bezeichner] = [Wert];
let name = 'peter pan';
// Namenkonvention variablen (Javascript): beginnt mit Kleinbuchstaben; Worttrennungen in camelCase
let bigNumber = 123;


/* 
    Primitive Datentypen
    number, string, boolean, undefined, null -> zahl, zeichenkette, wahrheitswert, undefiniert, NIX
*/

// EVA: Eingabe, Verarbeitung, Ausgabe
// Ausgabe von Werten ins Terminal
console.log('Hallo Welt!');
console.log(12);
console.log(true);
console.log(name); // Ausgabe Wert der Variable 'name' ins Terminal

let someVariable = 42;
console.log(typeof someVariable);

let strictlyTypedInteger = 12;
strictlyTypedInteger = "Hallo Welt!";

let someOtherVariable = someVariable + someVariable + '1';
console.log(someOtherVariable);
console.log(typeof someOtherVariable);

/* 
    Deklariert man Variablen ohne initiale Wertzuweisung,
    haben sie von Haus aus den Wert "undefined". Das bedeutet, 
    sie sind vom Datentypen und Wert her undefiniert.
*/
let sallary;
console.log(sallary);
console.log(typeof sallary);


/* 
    Ähnlich zu undefined gibt es den Wert "null".
    Dieser wird in der Regel explizit gesetzt und soll ebenfalls vermitteln,
    dass eine Variable keinen bestimmten Wert inne hat.
*/
sallary = null;
console.log(sallary);
console.log(typeof sallary);

/* 
    JS ist "case-sensitive".
    Es unterscheidet Groß- u. Kleinschreibung bei Bezeichnern.
*/
let early;
let Early;
let eArlY;
let früh;

let late = '23:00';
console.log(late);

/* 
    Konstanten sind ebenfalls Platzhalter so wie Variablen,
    deren Wert sich allerdings nicht mehr überschreiben lässt.
*/
const fixedValue = 12;
// fixedValue = 13; // -> Führt zum Fehler, weil Konstanten nicht überschrieben werden können

/* 
    (Mittlerweile) Konvention:
    Deklariere alles als "const", um unbeabsichtigte Wertänderungen nicht zuzulassen.
    Verwende "let" explizit dann, wenn eine Wertänderung der Variable beabsichtigt ist.
*/


const blabla = 'bla';
console.log(blabla);

// Codeblock mit eigenem Gültigkeitsbereich (Scope)
{
    // Variable x wird deklariert und ist nur in diesem Codeblock gültig
    let x = 12;

    // Mit var-Deklaration ist die Variable auf dem global Scope deklariert
    // var x = 12;
    console.log(x);
}
// Außerhalb des Codeblocks gilt nur noch der globale Gültigkeitsbereich (Global Scope)
// -> Kein Zugriff auf Variable x aus dem Codeblock davor
// const x = 13;
// console.log(x);

// Im globalen Scope (außerhalb des Codeblocks vorher) hat man nun Zugriff auf Variable x
// console.log(x);

// Mit var deklarierte Variablen im Codeblock lassen sich im globalen Scope re-deklarieren
// var x = 13;
// console.log(x);

// Global let-deklarierte Variable
let globalVar = 'Hallo Welt!';

{
    // Da eine var-Deklaration, die globale Variable re-deklarieren würde, lässt JS das hier auch im Blockscope nicht zu
    // var globalVar = 'Tschüss Welt!';
    // console.log(globalVar);

    // let-Deklarationen sind immer Blockscope, 
    // also verliert die globale Variable hier ihre Gültigkeit 
    // und es ensteht praktisch eine neue Variable nur für diesen Block
    let globalVar = 'Tschüss Welt!';
    console.log(globalVar);
}

console.log(globalVar);

