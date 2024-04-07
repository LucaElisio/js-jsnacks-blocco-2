// scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola

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

// Al click di calcola, stampo una stringa di tutti gli elementi nell'array separati da una virgola
printBtnElem.addEventListener("click", function(){
    const stampaResult = stampa(userArray);
    console.log(stampaResult);

    // Stampo in pagina il risultato
    resultElem.innerHTML = stampaResult;
})



// Control form
document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault();
});