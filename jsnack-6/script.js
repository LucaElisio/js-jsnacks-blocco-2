// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo

// Definisco array
const userArray = [];

// Trovo elemento input in pagina
const inputElementsElem = document.getElementById("input-elements");

// Trovo elemento bottone inserisci in pagina
const insertBtnElem = document.getElementById("insert-btn");

// Trovo elemento bottone stampa in pagina
const printBtnElem = document.getElementById("print-btn");

// Trovo elemento risultato in pagina
const resultElem = document.getElementById("result");


// Al clicl di inserisci, il valore di inputElementsElem viene inserito nell'array
insertBtnElem.addEventListener("click", function(){

    // Controllo inserimento elemento vuoto
    if (inputElementsElem.value.length === 0) {
        resultElem.innerHTML = "Hai inserito un elemento vuoto"
    } else {
        userArray.push(inputElementsElem.value);
        console.log(userArray);
        inputElementsElem.value = '';
    }

});

// Al click di stampa restituisco il risultato della funzione rimuoviDallaCoda() in pagina
printBtnElem.addEventListener("click", function(){

    // Salvo risultato funzione in una variabile
    const rimuoviDallaCodaResult = rimuoviDallaCoda(userArray);
    console.log(rimuoviDallaCodaResult);
    console.log(userArray);

    userArray.length = 0;

    // Copio l'arrayB in userArray
    for (let i = 0; i < rimuoviDallaCodaResult.length; i++) {
        const curElem = rimuoviDallaCodaResult[i];
        userArray.push(curElem);
    }

    // Stampo in pagina
    resultElem.innerHTML = rimuoviDallaCodaResult;

});


// Control form
document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault();
});