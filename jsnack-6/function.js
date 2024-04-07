

/**
 * Description
 * @param {array} arrayToCheck array da controllare
 * @returns {array} array con tutti gli elementi dell'arrayToCheck tranne l'ultimo
 */
function rimuoviDallaCoda (arrayToCheck) {
    
    // Definisco array B
    const arrayB = [];

    // Scorro l'array
    for (let i = 0; i < arrayToCheck.length - 1; i++) {

        // Dichiaro variabile elemento corrente
        const curElem = arrayToCheck[i];

        arrayB.push(curElem);

    }

    return arrayB;

}

