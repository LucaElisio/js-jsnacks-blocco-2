


/**
 * Description: generazione numero random tra due estremi
 * @param {number} min estremo minimo
 * @param {number} max estremo massimo
 * @returns {number} numero generato
 */
function generateNumber (min, max){
    const generatedNum = Math.floor(Math.random() * max - min + 1) + min;
    return generatedNum;
}