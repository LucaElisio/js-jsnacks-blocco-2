// Esercizio 1:
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

//Inserimento numero da utente
const n = parseInt(prompt("Inserisci un numero"));

// Genero n array
for (let i = 0; i < n; i++){

    // Dichiaro array vuoto
    const userArray = [];

    // Ciclo for per inserire 10 numeri nell'array
    for (let j = 0; j < 10; j++){
        // Richiamo la funzione per la generazione del contenuto dell'array
        let curNum = generateNumber(1, 100);
        console.log(curNum);
    
        // Inserisco nell'array il numero generato
        userArray.push(curNum);
    }

    // Stampo l'array
    console.log(userArray);

    // Stampo in pagina
    // Creo li
    const listItemElem = document.createElement('li');
    // Inserisco array dentro li
    listItemElem.innerHTML = userArray;
    // Trovo ul in pagina
    const arrayList = document.querySelector(".array-list");
    // Inserisco li in ul
    arrayList.append(listItemElem);
}