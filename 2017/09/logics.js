'use strict';

module.exports = {
    reverseSubArray: reverseSubArray
}

function reverseSubArray(arr, start, length) {
    for (let x = 0; x < length/2; x++) {
        let temp = arr[(start+x)%arr.length];
        arr[(start+x)%arr.length] = arr[(start+length-1-x)%arr.length];
        arr[(start+length-1-x)%arr.length] = temp;
    }
    return arr;
}
