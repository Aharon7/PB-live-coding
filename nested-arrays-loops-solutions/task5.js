/* 
    Aufgabe 5:
    Betrachte das gegebene Array.
    Es handelt sich um die Zuordnung von Suchbegriffen zu einem User.
    Um moeglichst komfortabel mit den Daten fuer die Auswertung arbeiten zu koennen,
    sollten diese normalisiert und aufgeraeumt werden.
*/

/* 
    Aufgabe 5.1.:
    1. Stelle sicher, dass alle Strings klein geschrieben sind
    2. Trenne Strings, die aus mehreren Begriffen bestehen, so auf, 
    dass die einzelnen Worte des Strings zusaetzlich als einzelne Elemente hinzugefuegt werden.
    Bsp.: ['Hasen', 'lustige Tiere'] -> ['hasen', 'lustige tiere', 'lustige', 'tiere']
*/
const searchTerms = [
    ['JavaScript', 'array Methoden', 'Chatgpt javascript', 'JS Aufgabenloesungen', 'youTube'],
    ['suesse Katzenbilder', 'spOnGebOB-cASe', 'Node.js', 'ablenkung', 'fakewebcam zoom unterricht'],
    ['anime streaming free', 'Japanese history', 'Samurai wallpaper HD', 'toyota'],
    ['amazon', 'Lampen kaufen guenstig', 'gute Angebote online'],
    ['Music charts', 'techno', 'best edm album 2023', 'pioneer-dj'],
];

/* 
    Aufgabe 5.2.:
    Jetzt da die Keywords ordentlich aufbereitet sind, macht es Sinn,
    die Suchbegriffe fuer die User-Zuordnung mit einer bekannten Liste von User-IDs zusammenzufuehren.
    Das untenstehende Array stellt die Liste dieser IDs in der entsprechenden Reihenfolge dar.
    Fuehre die programmatisch beide Arrays in ein neues zusammen in dem auf der ersten Dimension 5 Elemente gespeichert werden.
    Dabei besteht jedes Element aus einem Array mit zwei Elementen verschiedener Datentypen: [USER_ID, SUCHBEGRIFFE].
    So sieht das Ergebnisarray in etwa so aus:
    [
        [
            52, // USER_ID
            [   // SUCHBEGRIFFE
                'javascript',
                'array methoden',
                'array',
                'methoden',
                'chatgpt javascript',
                'chatgpt',
                'javascript',
                'js aufgabenloesungen',
                'js',
                'aufgabenloesungen',
                'youtube'
            ]
        ],
        [
            12,
            [
                'suesse katzenbilder',
                'suesse',
                'katzenbilder',
                'spongebob-case',
                'node.js',
                'memes'
                'ablenkung',
                'fakewebcam zoom unterricht',
                'zoom',
                'unterricht'
            ]
        ],

    ]
*/

// Liste der UserIds in entsprechender Reihenfolge
const userIds = [52, 12, 99, 1, 77];

// Ergebnisarray
const userSearchTerms = [];

// Durchlaufe die Liste der Suchbegriffssammlungen
for (let i = 0; i < searchTerms.length; i++) {
    // Neues Array für Zusammensetzung von ID und Suchbegriffen
    const userEntry = [];
    // Füge UserId am Anfang hinzu
    userEntry.push(userIds[i]);

    // Durchlaufe die Liste der Suchbegriff des Users
    for (let j = 0; j < searchTerms[i].length; j++) {
        // Referenz auf den jeweiligen Suchbegriff
        const searchTerm = searchTerms[i][j];

        // Teile grundsätzlich auf
        const splittedTerms = searchTerm.split(' ');

        // Füge Original normalisiert hinzu
        userEntry.push(splittedTerms.join(' ').toLocaleLowerCase());

        // Wenn bei Aufteilung mehr als 1 Element ensteht (d.h. es gibt ein Space drinnen)
        if (splittedTerms.length > 1) {
            // Durchlaufe alle Einzeilteile des aufgeteilten Suchbegriffs
            for (let k = 0; k < splittedTerms.length; k++) {
                // Hänge Einzelteile an
                userEntry.push(splittedTerms[k].toLowerCase());
            }

            // Oder in kurz mit dem Spread-Operator (kennen wir eigentlich noch nicht), wenn man die Terms bereits normalisiert hat
            // userEntry.push(...splittedTerms);
        }
    }

    userSearchTerms.push(userEntry);
}
console.log(userSearchTerms);