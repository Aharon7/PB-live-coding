/* 
    Schleifen (Loops)
*/
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);


const words = ['dog', 'book', 'door', 'computer', 'javascript'];
console.log(words.join(', '));

// Ergebnis String, der zusammengesetzt wird
let result = '';

// Schleife ueber alle Woerter im words-Array
for (let i = 0; i < words.length; i++) {
    // Fuege aktuelles Wort zum Ergebnis String hinzu
    result += words[i];

    // Wenn nicht letztes Wort
    if (i !== words.length -1) {
        // Fuege Trenner hinzu
        result += ", ";
    }
}
console.log(result);

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(word);
}

// For..of Schleife zum vollstaendigen Iterieren durch ein Array mit Referenz auf das jeweilige Element
for (const word of words) {
    console.log(word);
}

let counter = 0;
let randomNum = Math.floor(Math.random() * 11);
while(randomNum !== 10) {
    counter++;
    console.log(randomNum);
    randomNum = Math.floor(Math.random() * 11);
}
console.log(`Die Schleife ist ${counter} mal gelaufen.\n`);


const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a computer get drunk? It takes screenshots!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I used to play piano by ear, but now I use my hands.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fish with no eyes? A fsh!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a deer with no eyes? No idea!",
];

// const rounds = jokes.length; //9
// for (let i = 0; i < rounds; i++) {
//     // Ermittle Zufallsindex im gegebenen Rahmen (0 bis maxIndex von jokes)
//     let randomIndex = Math.floor(Math.random() * jokes.length);

//     // Extrahiere das entsprechende Element anhand des Index
//     let randomJoke = jokes[randomIndex];

//     // Gebe extrahiertes Element aus
//     console.log(randomJoke);

//     // Entferne das ausgegebene Element aus dem Array
//     jokes.splice(randomIndex, 1);
// }


// while(jokes.length > 0) {
//     // Ermittle Zufallsindex im gegebenen Rahmen (0 bis maxIndex von jokes)
//     let randomIndex = Math.floor(Math.random() * jokes.length);

//     // Extrahiere das entsprechende Element anhand des Index
//     let randomJoke = jokes[randomIndex];

//     // Gebe extrahiertes Element aus
//     console.log(randomJoke);

//     // Entferne das ausgegebene Element aus dem Array
//     jokes.splice(randomIndex, 1);
// }

let checkedIndices = [];
while(checkedIndices.length !== jokes.length) {
    // Ermittle Zufallsindex im gegebenen Rahmen (0 bis maxIndex von jokes)
    let randomIndex = Math.floor(Math.random() * jokes.length);

    // Wenn checkedIndices den neuen Zufallsindex noch nicht beinhaltet
    if (!checkedIndices.includes(randomIndex)) {
        // Extrahiere das entsprechende Element anhand des Index
        let randomJoke = jokes[randomIndex];

        // Gebe extrahiertes Element aus
        console.log(randomJoke);

        // Schreibe den ermittelten Index auf (wurde bereits gelesen)
        checkedIndices.push(randomIndex);
    }
}

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
