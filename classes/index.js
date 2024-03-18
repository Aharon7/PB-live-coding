/* 
    Klassen (Objekt-Orientierte-Programmierung)
    Klassen als digitale Abbildung realer Objekte.
*/
class Ball {
    constructor(durchmesser) {
        // Definition der Eigenschaften einer Klasse
        this.durchmesser = durchmesser; //in cm
        this.luftfülle = 2; // in bar

        console.log('Neue Instanz der Klasse Ball wird erstellt.');
    }

    // Definition von Methoden einer Klasse
    fliege(distanz) {
        console.log(`Ball fliegt ${distanz} Meter weit...`);
    }

    /* 
        Statische Felder oder Methoden einer Klasse
        sind nicht Instanz-Abhängig und grundsätzlich für die Klasse abrufbar.
        Oft nützlich für Instanzübergreife Werte
        oder z.B. sog. "Factory-Methoden" oder auch Instanz-Prüfungs-Methoden.
    */
    static einheitDurchmesser = 'cm';
    static einheitLuftfülle = 'bar';

    static erstelleFussball() {
        return new Ball(30);
    }

    static isBall(instanz) {
        if (instanz.hasOwnProperty('durchmesser')) return true;

        return false;
    }
}

// Das Erstellen einer neuen Klassen-Instanz (Instanziieren).
// Dabei wird der Konstruktor der Klasse aufgerufen.
const fussball = new Ball(30);
console.log(fussball);

// Zugriff auf Eigenschaften (Member-Variablen) der Instanz
console.log(fussball.durchmesser, Ball.einheitDurchmesser);
fussball.luftfülle = 1.6;
console.log(fussball.luftfülle, 'bar sind noch drin');

// Zugriff auf Instanz-Methoden
fussball.fliege(30);

// Instanz-Methoden können nur für gültige Instanzen aufgerufen werden
// Ball.fliege(20);


// Statische Methoden hingegen funktionieren nur für die Klasse selbst, nicht deren Instanzen
const neuerFussball = Ball.erstelleFussball();
console.log(neuerFussball);

console.log(Ball.einheitDurchmesser);

console.log(Ball.isBall(neuerFussball));
console.log(Ball.isBall([]));

// ---- Namenkonventionen
// Klassennamen grundsätzlich Großschreibung und i.d.R. singular (Einzahl)
class Student {
    constructor(name, study) {
        this.name = name;
        this.study = study;
    }

    // Instanz-Methode
    instroduceSelf() {
        console.log(`Hi, my name is ${this.name} and I'm studying ${this.study}`);
    }

    // Statische Klassen-Methode
    static isStudent(instance) {
        // Prüfe mithilfe des instanceof-Operators,
        // ob übergebenes Objekt eine Instanz der Klasse Student ist
        return instance instanceof Student;
    }
}

// Instanznamen in Konstanten oder Variablen grundsätzlich Kleinschreibung
const csStudent = new Student('Peter Pan', 'Computer Science');


// Aufruf Instanz-Methode
csStudent.instroduceSelf();

// Aufruf statische Klassenmethode
console.log(Student.isStudent(csStudent));
