/* 
    Aufgabe 1:
    Entwerfe eine Arraystruktur, um folgende Datenstruktur abzubilden:
    -----------------------------------------------------------------------------
    |   id  |   username    |   email            |   city     |   dateOfBirth     |
    |----------------------------------------------------------------------------
    | '1'   |   'peter123'  | 'p.eter@mail.de'   | 'Berlin'   |   '21-01-1987'    |
    | '2'   |   'mary82'    | 'mary82@mail.de'   | 'Leipzig'  |   '05-02-1982'    |
    | '4'   |   'seb.by2'   | 'seb.by@mail.de'   | 'Koeln'    |   '01-07-1994'    |
    | '12'  |   'kate_kute' | 'kate.etak@mail.de'| 'Hamburg'  |   '26-01-2001'    |
    | '99'  |   'randolf'   | 'ran.dolf@mail.de' | 'Muenchen' |   '11-01-1999'    |

    Und gebe anschliessend aus.
*/
const userList = [
    ['1', 'peter123', 'p.eter@mail.de', 'Berlin', '21-01-1987'],
    ['2', 'mary82', 'mary82@mail.de', 'Leipzig', '05-02-1982'],
    ['4', 'seb.by2', 'seb.by@mail.de', 'Koeln', '01-07-1994'],
    ['12', 'kate_kute', 'kate.etak@mail.de', 'Hamburg', '26-01-2001'],
    ['99', 'randolf', 'ran.dolf@mail.de', 'Muenchen', '11-01-1999']
];
console.log(userList);