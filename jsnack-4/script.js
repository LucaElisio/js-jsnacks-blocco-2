// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

// Control form
document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault();
});

// Dichiaro array
const userArray = [];

// Trovo il testo in input per aggiungere un elemento nell'array e salvo in variabile
const inputTextElements = document.getElementById("input-text-elements");

// Trovo il testo in input per cercare un elemento nell'array e salvo in variabile
const inputTextSearch = document.getElementById("input-text-search");

// Trovo il tag span dove stampare il risultato
const printElem = document.getElementById("result");

// Al click del bottone inserisci un elemento nell'array
document.getElementById("insert-btn").addEventListener("click", function(){

    // Controllo se non ha inserito testo vuoto
    if (inputTextElements.value.length === 0) {
        printElem.innerHTML = 'Non hai inserito nulla';
    } else {
        userArray.push(inputTextElements.value);
        console.log(userArray);
        inputTextElements.value = '';
    }

});

// Al click del bottone cerca, cerco l'elemento inserito nell'inputTextSearch e stampo il risultato
document.getElementById("search-btn").addEventListener("click", function(){

    // Richiamo funzione
    const trovaIndiceResult = trovaIndice(userArray, inputTextSearch.value);

    // Stampo in pagina il risultato
    printElem.innerHTML = `La posizione dell'elemento è ${trovaIndiceResult}`

});