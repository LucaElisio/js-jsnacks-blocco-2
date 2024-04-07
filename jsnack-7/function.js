

/**
 * Description
 * @param {array} arrayToCheck array da modificare
 * @returns {array} array modificato
 */
function rimuoviDallaTesta (arrayToCheck) {

        // Definisco array B
        const arrayB = [];

        // Scorro l'array
        for (let i = 1; i < arrayToCheck.length; i++) {
    
            // Dichiaro variabile elemento corrente
            const curElem = arrayToCheck[i];
    
            arrayB.push(curElem);
    
        }
    
        return arrayB;
}