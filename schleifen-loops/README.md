# Schleifen (Loops)
Schleifen sind Kontrollstrukturen, die Codebloecke bedingt wiederholt ausfuehren.
Dabei definiert man immer eine Laufbedingung und unterscheidet dabei zwischen
_Kopf_- und _Fussgesteuerten_ Schleifen.
- Kopfgesteuerte Schleifen pruefen die Laufbedingung noch VOR der ersten Ausfuehrung (d.h. sie laufen evtl. 0 mal)
- Fussgesteuerte Schleifen pruefen die Laufbedingung NACH der ersten Ausfuehrung (d.h. sie laufen mindestens 1 mal)

## For-Schleifen
Die `for`-Schleife eignet sich gut fuer wiederholenden Code, der eine definierte Anzahl von Durchlaeufen laufen soll.

### Die klassische For-Schleife (mit Laufindex)
Die klassische `for`-Schleife definiert einen Laufindex, der entsprechend einer von uns definierten Regel veraendert wird
und dessen Wert als Laufbedingung verwendet wird.

Bsp.:
Addiere die Zahlen von 1 bis 10.
```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
// sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
```

### For-Schleifen und Arrays
Moechten wir vollstaendig durch ein Array iterieren und brauchen dabei eigentlich keinen Index,
koennen wir die for..of Schleife nutzen.
Diese nutzt als Laufvariable den jeweils gegenwaertigen Wert.
Bsp.:
Gebe alle Elemente des Arrays in die Konsole aus.
```js
const words = ['dog', 'book', 'door', 'computer', 'javascript'];
for (const word of words) {
    console.log(word);
}
```

## While-Schleifen
`while`-Schleifen kommen immer dann zum Einsatz, wenn die Anzahl der Schleifendurchlaeufe (Iterationen) nicht fest definiert ist.
Sie kann bspw. verwendet werden, wenn eine unbestimmte Anzahl von Usereingaben erwartet wird.
Oder aber auch in vielen _random_ Kontexten.
Bsp.:
```js
let counter = 0;
let randomNum = Math.floor(Math.random() * 11);
while(randomNum !== 10) {
    counter++;
    console.log(randomNum);
    randomNum = Math.floor(Math.random() * 11);
}
console.log(`Die Schleife ist ${counter} mal gelaufen.\n`);
```

## Kopf- und Fussgesteuerte Schleifen
Je nachdem, ob eine Schleife mindestens *ein mal* oder im Zweifel *kein mal* laufen soll,
kann eine Fuss- oder eine Kopfgesteuerte Schleife verwendet werden.
```js
// Kopfgesteuert, weil Laufbedingung vor dem (ersten) Ausfuehren geprueft wird
for(let i = 0; i < 10; i++) {

}

// Kopfgesteuert, weil Laufbedingung vor dem (ersten) Ausfuehren geprueft wird
while (1 === 2) {
    
}

// Fussgesteuert, weil Laufbedingung erst am Ende der (ersten) Aufuehrung prueft,
// ob weitergemacht werden soll
do {
    
} while (1 === 2);
```