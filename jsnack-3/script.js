// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

// Definisco array
const userArray = [];

// Creo la variabile per stampare il risultato
const resultText = document.getElementById("result-text");

// Creo la variabile per il testo in input
const inputText = document.getElementById("input-text");

// Quando l'utente clicca su 'inserisci' il valore di 'input-text' viene pushato nell'array
document.getElementById("insert-button").addEventListener("click", function() {

    // Controllo inserimento testo vuoto
    if (inputText.value.length === 0) {
        resultText.innerHTML = "Attenzione, inserisci un elemento prima di cliccare il bottone!"
    } else {
        userArray.push(inputText.value);
        console.log(userArray);
        resultText.innerHTML = '';
    }

})




// Al click di 'calcola', stampo la quantità di elementi che ha inserito
document.getElementById("count-button").addEventListener("click", function() {

    // Richiamo la funzione
    const contaElementiReturn = contaElementi(userArray);
    console.log(contaElementiReturn);

    // Stampo in pagina il risultato
    resultText.innerHTML = `
    Hai inserito ${contaElementiReturn} elementi!
    `;

})

// Al click di reset l'array si svuota e si cancella il valore dato in input
const resetBtn = document.getElementById("reset-button");
resetBtn.addEventListener("click", function(){
    document.getElementById("input-text").value = '';
    userArray.length = 0;
    inputText.value = '';
    resultText.innerHTML = ''; 
});


// Control form
document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault();
});


