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



/* 
    -------------- Klassen-Vererbung --------------
    Klassenvererbung ist eine Mechanik, um Unterklassen von bestehenden Klassen zu erstellen,
    um z.B. eine Spezialisierung abzubilden.
*/
// Deklaration Klasse Car
class Car {
    // Konstruktor mit entsprechenden Parametern für die Eigenschaften
    constructor(make, color, doors) {
        // Zuweisung der Eigenschaften der Instanz auf die übergebenen Werte
        this.make = make;
        this.color = color;
        this.doors = doors;
    }

    // Instanzmethode zum Fahren
    drive() {
        console.log(`The ${this.color} ${this.make} is driving...`);
    }
}

// Deklaration der Klasse Truck als Unterklasse der Klasse Car
// d.h. Truck erbt Eigenschaften und Methoden von Car.
class Truck extends Car {
    // Konstruktor nimmt i.d.R. alle Parameter wie auch Oberklasse plus eigene, falls benötigt
    constructor(make, color, doors, maxPayload) {
        // Über super() wird der Konstruktor der Oberklasse aufgerufen 
        // und ihm die nötige Information per Parameter übergeben
        // In diesem Fall: doors könnte standard auf 2 gesetzt werden
        super(make, color, doors);

        // Zuweisung der Eigenschaften für Truck Unterklasse im Speziellen
        this.maxPayload = maxPayload;
    }

    // Definition Instanzmethode nur für diese Unterklasse
    unloadPayload() {
        console.log(`Emptying the ${this.make}'s payload...`);
    }
}



const lkw = new Truck('MAN', 'red', 2, 40);
lkw.unloadPayload();
lkw.drive();

const genericCar = new Car('Generic', 'black', 5);
genericCar.drive();

// Kein Zugriff auf Methoden oder Eigenschaften der Unterklassen
// genericCar.unloadPayload();


class SportsCar extends Car {
    constructor(make, color, doors, engine) {
        super(make, color, doors);

        this.engine = engine;
    }

    makeNoiseDowntown() {
        console.log('brumm brumm');
    }
}


const lambo = new SportsCar('Lamborghini', 'yellow', 3, 'v8');

lambo.drive();

// Methoden von Geschwistern sind nicht erreichbar
// lambo.unloadPayload();

lambo.makeNoiseDowntown();

// Ferrari als Unterklasse der Unterklasse SportsCar
class Ferrari extends SportsCar {
    constructor(doors, engine, logo) {
        super('Ferrari', 'red', doors, engine);

        this.logo = logo;
    }

    brag() {
        console.log(`Look at my ${this.make}. I like the ${this.color} color. The ${this.engine} makes a great sound.`);
    }
}

const ferrari = new Ferrari(2, 'v8', 'horse');
ferrari.drive();
ferrari.brag(); // Look at my Ferrari. I like the red color. The v8 makes a great sound.


class Phone {
    // Privates Instanzfeld, für Werte, die von außen nicht direkt zugreifbar sein sollen
    #percentage = 100;

    constructor(make, carrier, batteryCapacity) {
        this.make = make;
        this.carrier = carrier;
        this.batteryCapacity = batteryCapacity;
    }

    // Getter für das Auslesen eines privaten Feldes
    get percentage() {
        return this.#percentage;
    }

    // Setter für das Beschreiben eines privaten Feldes falls nötig
    // set percentage(newPercentage) {
    //     if (newPercentage >= 0) this.#percentage = newPercentage;
    // }

    /* 
        Manchmal sollen private Felder gar nicht von außen direkt beschrieben werden.
        Stattdessen passiert indirekt über andere Vorgänge
    */
    use() {
        console.log('Using the phone...');
        this.#percentage -= 1;
    }
}


const phone = new Phone('Nokia', 'Vodafone', 5000);
phone.make = 'Apple';
// phone.#percentage = 99; // Direkter Zugriff auf private Felder nicht erlaubt
console.log(phone);
phone.use();
console.log(phone.percentage);