/* 
    Aufgabe 1:
    Diese Aufgabe teilt sich in einige Unteraufgaben auf. Loese sie am besten ordentlich nacheinander.

    Fuer eine Mitarbeiterverwaltung sollst du etwas hilfreichen Code schreiben.
    Die Codeteile bauen zum Teil aufeinander auf.
*/


/* 
    Aufgabe 1.1.:
    Schreibe eine Funktion capitalize(), die einen String als Parameter erhaelt 
    und diesen mit grossem Anfangsbuchstaben als Rueckgabewert zurueck gibt.
    Bsp.: capitalize('peter'); // -> 'Peter'

    Die Funktion soll in jedem Fall einen String zurueckgeben.
    Wird also kein Parameter beim Aufruf angegeben, gibt die Funktion einen leeren String statt undefined zurueck.
    Bsp.: capitalize(); // -> ''
*/
function capitalize(string) {
    /* // Early return (Wenn kein Parameter, gib direkt leeren String zurueck)
    if (string === undefined) {
        return '';
    }

    // Gebe den transformierten String zurueck (erster Buchstabe gross, rest klein)
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); */

    // pruefe, ob Parameter ein String ist und ob String nicht leer
    if ((typeof string === 'string') && (string.length > 0)) {
        // Gebe transformierten String zurueck (erster Buchstabe gross, rest klein)
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return '';

/* 
    return (string !== undefined) 
        ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() 
        : ''; */
}
console.log(capitalize('wort'));
console.log(capitalize(''));
console.log(capitalize());


/* 
    Aufgabe 1.2.:
    Schreibe eine Funktion genFullname(), die zwei String-Parameter entgegennimmt:
    - firstname
    - lastname
    Die Funktion soll als Rueckgabewert einen zusammengesetzten vollen Namen liefern, 
    also Vor- und Nachnamen zusammengesetzt mit einem Leerzeichen getrennt zurueckgeben.
    Dabei soll sie die Funktion capitalize() genutzt werden, um Vor- und Nachnamen in Grossschreibung umzuwandeln.
    Bsp.: genFullname('peter', 'pan'); -> 'Peter Pan'

    Stelle sicher, dass die Funktion nur mit zwei gueltigen String Parametern laeuft.
    Hat einer der Parameter einen falschen Datentypen oder fehlt komplett, soll die Funktion den Wert null zurueckgeben.
    Bsp.: 
        genFullName(12, 'pan'); // -> null
        genFullName('peter'); // -> null
        genFullName(); // -> null

    BONUS: Sorge dafuer, dass die Funktion keine leeren Strings annimmt.
*/
function genFullName(firstname, lastname) {
    // Wenn firstname kein String ist (oder auch fehlt) ODER lastname kein String ist (also auch evtl. fehlt)
    // Gebe null zurueck (early return)
    if ((typeof firstname !== 'string') || (typeof lastname !== 'string'))
        return null;

    if ((firstname.length === 0) || (lastname.length === 0)) 
        return null;

    // Ansonsten gebe zusammengesetzten String mit jeweils grossen Anfangsbuchstaben zurueck
    return capitalize(firstname) + ' ' + capitalize(lastname);

/* 
    if (
        ((typeof firstname === "string") && (typeof lastname === "string"))
        && ((firstname.length > 0) && (lastname.length > 0))
    ) {
        return capitalize(firstname) + ' ' + capitalize(lastname);
    }
 
    return null;
*/
}
console.log(genFullName('pan')); // -> null
console.log(genFullName('peter', 'pan')); // -> 'Peter Pan'
console.log(genFullName(12, 'pan')); // -> null
console.log(genFullName('', 'pan')); // -> null

/* 
    Aufgabe 1.3.:
    Es wird eine Funktion zum Verarbeiten von Mitarbeiterlisten benoetigt.
    Schreibe eine Funktion mapFullnames, die zwei String-Arrays als Parameter entgegennimmt.
    - firstnames // Liste von Vornamen
    - lastnames // Liste von Nachnamen
    Die Funktion soll ein neues Array mit zusammengesetzten Namen (Vollstaendige Namen) zurueckgeben.
    Bsp.:
        mapFullnames(['peter', 'mary', 'john'], ['pan', 'poppins', 'doe']); // -> ['Peter Pan', 'Mary Poppins', 'John Doe']
    Nutze hierfuer deine bereits geschriebenen Funktionen genFullname und capitalize.

    Die Funktion soll keine Anomalien liefern. Ungueltige Werte in den Arrays sollen uebersprungen werden.
    Bsp.:
        mapFullnames([undefined, 'mary', 'john'], ['pan', 'poppins', 'doe']); // -> ['Mary Poppins', 'John Doe']

    Ist eines der Arrays nicht vorhanden, soll die Funktion null zurueckgeben.

    Sind die Arrays nicht gleich lang, soll die Funktion ebenfalls null zurueckgeben.

    Kommentiere die untenstehenden Tests aus und sorge dafuer, dass die erwarteten Ergebnisse kommen.
*/
function mapFullnames(firstnames, lastnames) {
    // Ergebnisarray fuer die vollstaendigen Namen
    let fullnames = [];

    // Wenn beide Parameter jeweils ein Array sind UND die gleiche Laenge haben
    if (Array.isArray(firstnames) && Array.isArray(lastnames) && (firstnames.length === lastnames.length)) {
        // Schleife ueber die Laenge des Arrays der Vornamen
        for (let i = 0; i < firstnames.length; i++) {
            // Wenn die jeweiligen Werte am aktuellen Index in beiden Arrays vom Typ String sind
            if ((typeof firstnames[i] === 'string') && (typeof lastnames[i] === 'string')) {
                // Fuege vollstaendigen Namen (Vor- und Nachname) zum Ergebnisarray hinzu
                fullnames.push(genFullName(firstnames[i], lastnames[i]));
            }
        }

        // Gebe Ergebnisarray zurueck
        return fullnames;
    }

    // Fallback -> Gebe null zurueck
    return null;
}

const firstnames = ['peter', 'max', 'susan', 'susi'];
const lastnames = ['parker', 'mustermann', 'nasus', 'strolch'];
console.log(mapFullnames(firstnames, lastnames)); // -> ['Peter Parker', 'Max Mustermann', 'Susan Nasus', 'Susi Strolch']
console.log(mapFullnames(firstnames, [undefined, 'mustermann', 'nasus', 'strolch'])); // -> ['Max Mustermann', 'Susan Nasus', 'Susi Strolch']
console.log(mapFullnames(firstnames)); // -> null
console.log(mapFullnames(firstnames, [])); // -> null


/* 
    Aufgabe 1.4.
    Desweiteren wird eine Funktion replaceDelimiter() benoetigt, die aus einem uebergebenen Array mit vollstaendigen Mitarbeiternamen
    ein Array mit einem freiwaehlbaren Trenner zwischen Vor- und Nachnamen liefert.
    Sie erhaelt also zwei Parameter:
    - namesList // Array mit Namen
    - delimiter (optional) // ein String fuer einen Trenner zwischen Vor- und Nachname

    Der Parameter delimiter ist optional und soll einen Defaultwert ' '(Leerzeichen) erhalten.
    Bsp.:
        replaceDelimiter(['Mary Poppins', 'John Doe', 'Albert Einstein'], '_'); // -> ['Mary_Poppins', 'John_Doe', 'Albert_Einstein']
        replaceDelimiter(['Mary Poppins', 'John Doe', 'Albert Einstein'], '/'); // -> ['Mary/Poppins', 'John/Doe', 'Albert/Einstein']
        replaceDelimiter(['Mary Poppins', 'John Doe', 'Albert Einstein']); // -> ['Mary Poppins', 'John Doe', 'Albert Einstein']

    Die Funktion soll Absturzsicher sein; ist einer der Werte kein String, soll die Funktion den Wert ueberspringen.

    Ist die Namensliste nicht mit angegeben, gebe ein leeres Array zurueck.

    Sorge dafuer, dass das uebergebene Originalarray nicht ueberschrieben wird!

    TIPP: Schaue dir mal die String.replace() Methode an. Sie koennte hilfreich sein.

    Kommentiere die untenstehenden Tests aus und sorge dafuer, dass die erwarteten Ergebnisse kommen.
*/
function replaceDelimiter(namesList, delimiter = ' ') {
    // Wenn namesList nicht vorhanden -> early return (leeres Array)
    if (namesList === undefined) return [];

    // Ergebnisarray
    let result = [];

    // Durchlaufe alle Indizes der uebergebenen Namensliste
    for (let i = 0; i < namesList.length; i++) {
        // Wenn aktueller Wert der Namensliste vom Typ String
        if (typeof namesList[i] === 'string') {
            // Fuege transformierte Kopie des aktuellen Namen zum Ergebnisarray hinzu
            result.push(namesList[i].replace(' ', delimiter));
        }
    }

    // Gebe fertiges Ergebnisarray zurueck
    return result;
}
console.log('--------------------------');
const employeeList = ['Helmut Kohl', 'Gehardt Schroeder', 'Angela Merkel', 'Olaf Scholz'];
let delimitedList = replaceDelimiter(employeeList, '--');
console.log(delimitedList); // ['Helmut--Kohl', 'Gehardt--Schroeder', 'Angela--Merkel', 'Olaf--Scholz']
console.log('Erbnisarray ist Kopie:',delimitedList !== employeeList); // true
delimitedList = replaceDelimiter(employeeList);
console.log(delimitedList); // ['Helmut Kohl', 'Gehardt Schroeder', 'Angela Merkel', 'Olaf Scholz']
delimitedList = replaceDelimiter(['Helmut Kohl', null, 12, 'Olaf Scholz']);
console.log(delimitedList); // ['Helmut Kohl', 'Olaf Scholz']
delimitedList = replaceDelimiter([]);
console.log(delimitedList); // []
delimitedList = replaceDelimiter();
console.log(delimitedList); // []
