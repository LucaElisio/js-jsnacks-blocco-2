// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// Inserimento parola
const userWord1 = prompt("Inserisci una parola");
// Inserimento parola 2
const userWord2 = prompt("Inserisci una parola");

const twoWordLengthResult = twoWordLength(userWord1, userWord2);
console.log(twoWordLengthResult);



if (twoWordLengthResult) {
    console.log(userWord1, userWord2);
} else if (userWord1.length < userWord2.length) {
    console.log(userWord2);
} else {
    console.log(userWord1);
}