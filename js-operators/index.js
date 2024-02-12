/* 
    Operatoren sind Symbole oder Anweisungen zum Durchführen von Operationen 
    auf sog. Operanden.
    Dabei gibt es
    - unäre Operatoren -> operieren auf nur einem Operanden. Bsp.: -12 // Mathematisches Vorzeichen negativ
    - binär Operatoren -> operieren auf zwei Operanden. Bsp.: 1 + 1 // Addition zweier Werte
    - ternäre Operatoren -> operieren auf drei Operanden.

    Javascript unterscheidet grob zwischen einigen Operatorengruppen:
    - Arithmetischen Operatoren (zum Rechnen): +,-,*,/,%,**
    - Vergleichsoperatoren (zum Vergleichen von Werten): ===, !==, <, >, <=, >=
    - Abkürzungsoperatoren (zum Kombinieren von Operationen): +=, -=, *=, /=, ++, --
    - Logische Operatoren (Boole'sche Algebra): && (logisches UND), || (logisches ODER), ! (logisches NICHT)
*/
// Arithmetischen Operatoren
console.log(1+1); // Addition von 1 + 1 = 2
console.log(1-1); // Subtraktion von 1 - 1 = 0
console.log(1*1); // Multiplikation von 1 * 1 = 1
console.log(2/1); // Division von 2 / 1 = 1
console.log(3%2); // Modulo von 3 % 2 = 1 -> Ganzzahldivision mit Rest
console.log(2**2); // Exponent von 2^2 = 4 -> "Zwei hoch Zwei"

// Vergleichsoperatoren
console.log(1 === 1); // Prüfen auf Gleichheit des Datentyps und Wertes - "strict comparison"
console.log(1 == '1'); // Prüfen auf Gleichheit des Wertes - "non-strict comparison" -> Wird grundsätzlich von abgeraten zu benutzen
console.log(1 !== 1); // Prüfen auf Ungleichheit des Datentyps und Wertes
console.log(1 != '1'); // Prüfen auf Ungleichheit des Wertes -> Wird grundsätzlich von abgeraten zu benutzen
console.log(1 < 2); // Kleiner als
console.log(1 > 2); // Größer als
console.log(1 <= 2); // Kleiner-Gleich
console.log(1 >= 2); // Größer-Gleich


// Abkürzungsoperatoren
let x = 1;
x++; // Inkrement -> Erhöhe um 1 - Das gleiche wie x = x + 1
console.log(x); 
x--; // Dekrement -> Verringere um 1 - Das gleiche wie x = x - 1
console.log(x);
// Kombiniert Arithmetik und Zuweisung
let y = 0;
y += 12; // Addiere 12 auf den Wert von y und Weise das Rechenergebnis auf y zu - Das gleiche wie y = y + 12
console.log(y);
y -= 12; // Subtrahiere 12 vom Wert von y und Weise das Rechenergebnis auf y zu - Das gleiche wie y = y - 12
console.log(y);
y *= 2; // Multipliziere den Wert von y mit 2 und Weise das Rechenergebnis auf y zu - Das gleiche wie y = y * 2
console.log(y);
y /= 2; // Teile den Wert von y durch 2 und Weise das Rechenergebnis auf y zu - Das gleiche wie y = y / 2
console.log(y);


// Logische Operatoren
const isRaining = true;
const goingOutside = true;

// Logisches UND
const needAnUmbrella = isRaining && goingOutside; // Wenn es regnet UND ich raus gehen möchte, brauche ich einen Regenschirm
console.log(needAnUmbrella);

// Logisches ODER
const goingToShower = isRaining || goingOutside; // Wenn es regnet ODER ich rausgehen möchte (ODER BEIDES), dann werd ich duschen
console.log(goingToShower);

// Logisches NICHT
const isNotRaining = !isRaining;