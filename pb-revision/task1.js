/* 
    ------------------------- Student Management System -------------------------
    Für ein Studentenverwaltungssystem sollst du Code beitragen.
    Im groben besteht das System aus Studentenobjekten, die in einem großen Array
    aller Studenten gespeichert werden sollen.
    Desweiteren sollen Studenten in Kurse eingeteilt werden.
    Diese Kurse werden ebenfalls als Objekte angelegt, die ein Array mit Studentenreferenzen halten.
*/

/* 
    Aufgabe 1 - Student
    In diesem Abschnitt soll die Datenstruktur und alles dafür nötige
    für die Studentendatensätze entstehen.
    Ein Studenteneintrag besteht aus:
    - Einer eindeutigen Matrikelnummer, die sich systematisch aus Studentendaten zusammensetzt
    - einem Vornamen
    - einem Nachnamen
    - einem ISO-Geburtsdatum als String (YYYY-MM-DD)
    - einem Verweis auf einen der bisher bestehenden Studiengänge
*/

/* 
    Aufgabe 1.1.
    Wie erwähnt, sollen die Studiengänge an zentraler Stelle verwaltet werden.
    Erstelle das Objekt "STUDIES" als sogenanntes ENUM, um folgende Studiengänge anzulegen:
    - "Computer Science"
    - "Business Administration"
    - "Arts"
    - "Philosophy"
    Nutze diese Namen als Wert und vergebe sinnvolle Keys.
    Dieses Objekt wird ab jetzt genutzt, um in den Studierendeneinträgen
    auf einen Studiengang zu verweisen.
*/
const STUDIES = {
    cs: "Computer Science",
    ba: "Business Administration",
    art: "Arts",
    phil: "Philosophy"
};

/* 
    Aufgabe 1.2.
    Die Studenten sollen mit einer Matrikelnummer,
    die sich aus ihren individuellen Daten zusammensetzt,
    versehen werden.
    Der Aufbau ist wie folgt:
    [erste 3 Buchstaben des Vornamen]-[erste 3 Buchstaben des Nachnamen]-[ISO Geburtsdatum ohne Trenner]
    Schreibe hierfür eine Funktion genStudentID(firstname, lastname, birthdate), die die Matrikelnummer als String zurückgibt.

    Bsp.:
    genStudentID('Peter', 'Pan', '1956-01-31'); // -> 'pet-pan-19560131'
*/
function genStudentID(firstname, lastname, birthdate) {
    // Erstelle die benoetigten Kuerzel
    const shortFirstname = firstname.toLowerCase().slice(0,3);
    const shortLastname = lastname.toLowerCase().slice(0,3);
    const shortBirthdate = birthdate.replaceAll("-", "");

    // Setze Matrikelnummer aus Kuerzeln zusammen
    return `${shortFirstname}-${shortLastname}-${shortBirthdate}`;
}
// console.log(genStudentID('Peter', 'Pan', '1956-01-31')); // -> 'pet-pan-19560131'



/* 
    Aufgabe 1.3.
    Jetzt da wir alles nötige für Studenteneinträge haben,
    erstelle eine Konstante STUDENTS in der du ein Array von Studentenobjekten speicherst.
    Erstelle einige Beispieleinträge und nutze dabei genStudentID für das Erstellen der Matrikelnummer
    und STUDIES für den Verweis auf den Studiengang.
*/
const STUDENTS = [
    {
        id: genStudentID('Peter', 'Pan', '1956-01-31'),
        firstname: 'Peter',
        lastname: 'Pan',
        birthdate: '1956-01-31',
        study: STUDIES.phil
    },
    {
        id: genStudentID('Mary', 'Poppins', '1944-12-15'),
        firstname: 'Mary',
        lastname: 'Poppins',
        birthdate: '1944-12-15',
        study: STUDIES.cs
    },
    {
        id: genStudentID('Robert', 'Geiss', '1966-05-21'),
        firstname: 'Robert',
        lastname: 'Geiss',
        birthdate: '1966-05-21',
        study: STUDIES.ba
    },
    {
        id: genStudentID('Frida', 'Kahlo', '1936-02-01'),
        firstname: 'Frida',
        lastname: 'Kahlo',
        birthdate: '1907-07-06',
        study: STUDIES.art
    },
];


/* 
    Aufgabe 1.4.
    Schreibe zusätzlich eine Funktion createStudent, die anhand von Vornamen, Nachnamen, Geburtstag und Studiengang
    einen neuen Studentendatensatz anlegt und zum Array STUDENTS hinzufügt.
    Sorge dabei dafür, dass es keine doppelten Einträge gibt.
*/
function createStudent(firstname, lastname, birthdate, study) {
    // Erstelle Studentendatensatz
    const student = {
        id: genStudentID(firstname, lastname, birthdate),
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        study: study
    };

    // Pruefe, ob Eintrag mit derselben ID bereits existiert
    const studentExists = STUDENTS.find(currentStudent => currentStudent.id === student.id);

    // Wenn NICHT Dublette
    if (!studentExists) {
        // Fuege Datensatz als Eintrag hinzu
        STUDENTS.push(student);
    
    } else {
        console.log(`Studenteintrag mit derselben ID existiert bereits`);
    }
}
console.log(STUDENTS);
console.log('-------------');
createStudent('John', 'Doe', '1999-12-31', STUDIES.phil);
console.log(STUDENTS);
createStudent('John', 'Doe', '1999-12-31', STUDIES.cs);



/* 
    Aufgabe 2 - Course
    Studenten besuchen Kurse welche auch organisiert und verwaltet werden müssen.
*/

/* 
    Aufgabe 2.1.
    Erstelle ein Array COURSES, das Kursobjekte beinhaltet, die aus folgenden Daten bestehen:
    - Kursname
    - Studiengänge (eine Liste von Studiengängen für die dieser Kurs ist)
    - Studenten (eine Liste von Studentenreferenzen, die für diesen Kurs eingetragen sind)

    Lege einige Beispiele an.
*/
const COURSES = [
    {
        name: 'Analysis I',
        studies: [
            STUDIES.cs,
            STUDIES.ba
        ],
        students: [
            STUDENTS[1], // Mary Poppins
            STUDENTS[2], // Robert Geiss
        ]
    },
    {
        name: 'Sketching I',
        studies: [
            STUDIES.art
        ],
        students: [
            STUDENTS[3], // Frida Kahlo
        ]
    },
    {
        name: 'Logical Thinking',
        studies: [
            STUDIES.cs,
            STUDIES.phil
        ],
        students: [
            STUDENTS[0], // Peter Pan
            STUDENTS[1], // Mary Poppins
            STUDENTS[4], // John Doe
        ]
    },
];
console.log(COURSES);

/* 
    Aufgabe 2.2.
    Für die komfortable Verwaltung von Kursen, bedarf es einer Funktion,
    die Studenten in Kurse eintragen kann.
    Schreibe Funktion "addStudent", die einen Studenten als Parameter entgegennimmt
    und dem entsprechenden Kurs hinzufügt.
    Hinterlege diese Funktion als Methode für alle Kurse.
    Da die Funktion nur den Studenten als Parameter entgegennimmt, könnte das "this"-Keyword sehr hilfreich sein.

    Stelle außerdem sicher, dass ein Student nur einmalig in einen Kurs eingetragen werden kann.


    BONUS: Stelle sicher, dass du nur Studierende mit dem entsprechenden Studiengang eingetragen werden duerfen.
*/
function addStudent(student) {
    // Pruefe, ob Student in Kurs bereits eingetragen
    const studentInCourse = this.students.find(currentStudent => currentStudent.id === student.id);

    // Wenn nicht bereits eingetragen und zugelassene Studiengaenge den des Studierenden beinhalten
    if (!studentInCourse && this.studies.includes(student.study)) {
        // Trage ein
        this.students.push(student);

    } else if (!this.studies.includes(student.study)) {
        console.log('Studiengang des Studierenden ist nicht fuer diesen Kurs zugelassen');

    } else {
        console.log('StudentIn besucht diesen Kurs bereits');
    }
}
COURSES.forEach(course => course.addStudent = addStudent);
// COURSES[0].addStudent(STUDENTS[1]);
COURSES[0].addStudent(STUDENTS[0]);
console.log(COURSES[0]);


/* 
    Aufgabe 2.3.
    Schreibe eine weitere Funktion zum entfernen von Studenten aus dem Kurs.
    Sie soll das Studentenobjekt des entfernten Studenten als Rückgabewert liefern.

    Die Funktion erhält die Matrikelnummer des Studenten als Parameter.
*/
function removeStudent(studentID) {
    const studentIdx = this.students.findIndex(currentStudent => currentStudent.id === studentID);

    // Eintrag nicht gefunden
    if (studentIdx < 0) {
        console.log('Kein entsprechender Student in diesem Kurs gefunden...');

        // Gebe null als Ersatz für entfernen Eintrag zurück (early return)
        return null;
    }

    // Entferne Eintrag und speichere gelöschte Elemente als Array in Konstante
    const removedStudents = this.students.splice(studentIdx, 1);

    // Gebe gelöschten Eintrag zurück (erstes Element des Arrays der gelöschten Elemente)
    return removedStudents[0];
}

COURSES.forEach(course => course.removeStudent = removeStudent);
console.log('gelöschter Eintrag', COURSES[2].removeStudent('joh-doe-19991231'));
console.log(COURSES[2].students);
COURSES[0].removeStudent('joh-doe-19991231'); // Nicht vorhanden