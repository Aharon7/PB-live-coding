/* 
    ----------------------- Objekte -----------------------
    Objekte sind ein dynamischer Datentyp, der zusammengesetzte Werte unter einem Wert darstellt.
    So laesst sich bspw. eine Person, die eine Summe verschiedener Daten ist, in einem einzigen
    obergeordneten Wert abbilden.
*/

const personName = 'peter';
const personAge = 12;
const personIsMarried = false;

const person = {
    // Eigenschaften des Objekts
    name: personName,
    age: personAge,
    isMarried: personIsMarried,

    // Methoden des Objekts (Funktionen, die direkt dem Objekt angehoeren)
    introduceSelf: function() {
        console.log(`Hello there, I'm ${this.name}, I'm ${this.age} years old.`);
    }
};

console.log(person); // Gebe ganzes Objekt aus
console.log(person.name); // Gebe einzelne Eigenschaften des Objekt aus
person.introduceSelf();


/* 
    Werte von Eigenschaften lassen sich auch ausserhalb der eigentlichen
    Definition des Objekts veraendern.
*/
person.age = 13;
console.log(person);

/* 
    Die Wertzuweisung einer Eigenschaft ist auch gleichzeitig die
    Neudefinition einer Eigenschaft.
*/
person.canFly = true;
console.log(person);

/* 
    Um Eigenschaften waehrend der Laufzeit auch entfernen zu koennen,
    wird der "delete" operator verwendet.
*/
delete person.canFly;
console.log(person);

/* 
    Aehnlich zur for..of Schleife fuer Arrays,
    gibt es die for..in Schleife fuer Objekte.
    Diese iteriert durch die Eigenschaften (Schluessel-Wert-Paare) des Objekts
    und stellt uns den jeweiligen Schluessel der Eigenschaft zur Verfuegung.
*/
for (const propertyKey in person) {
    console.log(propertyKey);

    // Greife auf den Wert der Eigenschaft per sog. "Bracket-Notation" zu
    const propertyValue = person[propertyKey];
    console.log(propertyValue);
}

/* 
    Objekte haben auch eine ganze Reihe statischer Methoden, die bereits
    von Haus aus eingebaut sind.
    Eine sehr nuetzliche davon ist die Methode Object.keys().
    Diese nimmt ein Objekt als Parameter entgegen und gibt als Rueckgabewert ein Array
    mit allen Eigenschaftsschluesseln als String zurueck
*/
const objectKeys = Object.keys(person);
console.log(objectKeys);

console.log('Hat Eigenschaft bankaccount:', objectKeys.includes('bankaccount'));


/* 
    Moechte man ueberpruefen, ob ein Objekt eine bestimmte Eigenschaft besitzt,
    kann man die fuer jedes Objekt eingebaute Methode .hasOwnProperty(PROP_KEY) nutzen.
    Sie gibt einen Boolean zurueck, der aussagt, ob die Eigenschaft existiert oder nicht.
*/
console.log(person.hasOwnProperty('name'));

// Leeres Objekt
const emptyObject = {};


/* 
    Die Methoden eines Objekts sind Funktionen die als Eigenschaft eines Objekts
    definiert wurden.
    Dafuer gibt es verschiedene Notationen.
*/
const pet = {
    name: "fluffy",
    animalType: 'dog',

    // makeNoise: function() {
    //     console.log('Wau wau');
    // },

    // makeNoise: () => {
    //     console.log('Wau wau');
    // },

    makeNoise() {
        console.log('Wau wau');
    },

    // sayOwnName: function() {
        // this-Referenz gibt uns Zugriff auf das Objekt in dem sich die Methode befindet
    //     console.log(`Hi, I'm ${this.name}`);
    // },

    // Als Kurzschreibweise fuer anonyme Funktion innerhalb eines Objekts
    sayOwnName() {
        console.log(`Hi, I'm ${this.name}`);
    }

    // Arrow-Function als Methodendefinition nur dann, wenn this-Referenz nicht benoetigt wird
    // sayOwnName: () => {
    //     console.log(`Hi, I'm ${this.name}`);
    // },
};
pet.makeNoise();
pet.sayOwnName();

/* 
    Der typeof Operator liefert Aufschluss über den Datentyp einer Variable.
    typeof angewendet auf ein Objekt liefert den Wert 'object'.
    typeof angewendet auf ein Array liefert ebenfalls den Wert 'object'.
*/
const someObj = {
    prop1: 'prop1',
    prop2: 'prop2'
};
console.log(typeof someObj);
console.log(Object.keys(someObj));

/* 
    Arrays sind in Javascript grundlegend als Objekte aufgebaut.
    Daher muss man etwas aufpassen, wenn es darum geht Objekte von eigentlich Arrays zu unterscheiden.
*/
const someArr = [1,2,3,4];
console.log(typeof someArr);
console.log(Object.keys(someArr));
// const arr = {
//     0: 1,
//     1: 2,
//     2: 3
// }
// arr.push(4);
// arr["3"] = 4;

// Die statische Methode Array.isArray() gibt uns Klarheit darüber,
// ob ein Objekt auch eigentlich ein Array ist.
console.log(Array.isArray(someArr));

/* 
    Objekte vergleichen
    Genauso wie bei Arrays, vergleicht der Vergleichsoperator bei Objekten nur die Referenz dieser
    nicht die Werte innerhalb.
*/
const comparableArray = [1,2,3];
console.log(comparableArray === [1,2,3]); // immer false, weil nur Referenzen verglichen werden

const comparableObject = {
    name: 'mary',
    age: 29
};
console.log(comparableObject === {name: 'mary', age: 29}); // immer false, weil nur Referenzen verglichen werden

console.log(Object.values(comparableObject));

function compareObjectsByValue(objA, objB) {
    // Extrahiere Schlüssel der Eigenschaften der Objekte in Konstanten
    const keysOfA = Object.keys(objA);
    const keysOfB = Object.keys(objB);

    // Extrahiere Werte der Eigenschaften der Objekte in Konstanten
    const valuesOfA = Object.values(objA);
    const valuesOfB = Object.values(objB);

    // Wenn Anzahl der Schlüssel nicht gleich ist, gebe false zurück (early return)
    if (keysOfA.length !== keysOfB.length) return false;

    // Iteriere durch die Werte und vergleiche
    let valuesEqual = true;
    for (const keyA in objA) {
        // Extrahiere den Wert der Eigenschaft aus dem ersten Objekt
        const valueA = objA[keyA];

        // Extrahiere den Wert der Eigenschaft aus dem zweiten Objekt
        const valueB = objB[keyA];
        console.log(valueB);

        // Wenn die Werte nicht gleich sind -> nicht gleich
        if (valueA !== valueB) valuesEqual = false;
    }


    // for (let i = 0; i < valuesOfA.length; i++) {
    //     // Gibt es einen Unterschied bei den Werten, können die Objekte nicht gleich sein
    //     if (!valuesOfB.includes(valuesOfA[i])) valuesEqual = false;
    // }

    return valuesEqual;
}

console.log(compareObjectsByValue(comparableObject, {alter: 29, name: 'mary'}));

/* 
    1. Objekte haben gleich viele Eigenschaften
    2. Objekte haben gleiche Schlüssel
    3. Die Werte der Eigenschaften sind an den Schlüsseln gleich
*/

const objA = {
    hihi: 'bla',
    prop2: 'blub'
};

const objB = {
    prop1: 'bla',
    prop2: 'blub'
};

valueProp1A = objA['hihi'];
valueProp1B = objB['hihi'];

console.log(valueProp1A, valueProp1B);