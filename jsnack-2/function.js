




/**
 * Description: verifico che due parole abbiano la stessa lunghezza
 * @param {string} wordToCheck1 parola da controllare
 * @param {string} wordToCheck2 parola da controllare
 * @returns {boolean} true se hanno la stessa lunghezza, altrimenti false
 */
function twoWordLength (wordToCheck1, wordToCheck2) {
    flag = false;
    if (wordToCheck1.length === wordToCheck2.length) {
        flag = true;
    }

    return flag;
}