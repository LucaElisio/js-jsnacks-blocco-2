


/**
 * Description
 * @param {array} arrayToCheck l'array dove dobbiamo contare gli elementi
 * @returns {number} numero di elementi presenti nell'array
 */
function contaElementi (arrayToCheck) {

    // Variabile di appoggio che conta gli elementi
    let count = 0;

    // Ciclo for per leggere uno ad uno gli elementi dell'array
    for (let i = 0; i < arrayToCheck.length; i++) {
        count++;
    }

    return count;

}