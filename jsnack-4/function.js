

/**
 * Description
 * @param {array} arrayToCheck array da controllare
 * @param {string, number} elemToFind elemento da cercare nell'array
 * @returns {number} posizione dell'elemento nell'array
 */
function trovaIndice (arrayToCheck, elemToFind) {

    // Dichiaro variabile flag
    let flag = false;

    // Scorro l'array
    for (let i = 0; i < arrayToCheck.length; i++) {
        
        // Controllo se l'elemento da cercare è uguale all'elemento corrente
        if (elemToFind === arrayToCheck[i]) {
            flag = true;
            return i;
        }

        console.log(i);

    }

    // Condizione per il ritorno del risultato
    if (flag == false) {
        return "-1";
    }
    
}
