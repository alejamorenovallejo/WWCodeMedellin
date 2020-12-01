/**
 * @param {*} array array of integers
 */

array=[5,1,3,58,20,10,12,34,40];
const bubleSort = (array) => {
    let arraySort = array

    for (i = 0; i < arraySort.length; i++) {
        for (j = 0; j < (arraySort.length - i); j++) {
            if (arraySort[j] > arraySort[j + 1]) {
                auxiliar = arraySort[j];
                arraySort[j] = arraySort[j + 1];
                arraySort[j + 1] = auxiliar;
            }
        }
    }
    return arraySort
}
console.log(bubleSort(array))

