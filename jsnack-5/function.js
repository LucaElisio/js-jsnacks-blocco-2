

/**
 * Description
 * @param {Array} arrayToCheck array da controllare
 * @returns {string} stringa di tutti gli elementi nell'array separati da una virgola
 */
function stampa(arrayToCheck) {
    
    // Definisco variabile per concatenare gli elementi in stringa
    let arrayString = '';

    // Scorro l'array
    for (let i = 0; i < arrayToCheck.length; i++){

        const curElem = arrayToCheck[i];
        
        // Inserimento virgola prima di ogni elemento solo se non è il primo!

        if(i != 0) {
            arrayString += ',' + curElem;
        } else {
            arrayString += curElem;
        }

    }

    return arrayString;
}