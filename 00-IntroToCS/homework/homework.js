'use strict'

function BinarioADecimal(num) {
    // tu codigo aca
    var data = num.split("");
    data = data.reverse();

    var result = 0;

    for (var i = 0; i < data.length; i++) {

        result += Math.pow(2, i) * data[i]
    }
    return result;
}

function DecimalABinario(num) {
    // tu codigo aca
    var result = "";

    while (num > 0) {
        result = (num % 2) + result;
        num = Math.floor(num / 2);
    }
    return result;
}


module.exports = {
    BinarioADecimal,
    DecimalABinario,
}