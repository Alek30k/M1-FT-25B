'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    // caso base
    if (array.length <= 1) return array;

    // tomo pivote
    var pivot = array[0];
    // defino izq y der
    var izq = [];
    var der = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            izq.push(array[i])
        } else {
            der.push(array[i])
        }
    }
    // Recursión
    return quickSort(izq).concat(pivot).concat(quickSort(der))
}

function merge(arr1, arr2) {
    var i = 0;
    var j = 0;
    var res = [];

    while (i < arr1.length && j < arr2.length) {
        // comparo y pusheo a res
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++
        } else {
            res.push(arr2[j])
            j++
        }

    }
    return res.concat(arr1.slice(i)).concat(arr2.slice(j))
}
// 9, 13, 15]              [35, 88]
// i
//                          j
// [9...]


function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    // caso base
    if (array.length === 1) return array;

    var medio = Math.floor(array.length / 2);

    var izq = array.slice(0, medio);
    var der = array.slice(medio);

    return merge(mergeSort(izq), mergeSort(der))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};