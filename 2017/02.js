'use strict';

const fs = require('fs');

fs.readFile('./inputs/02.txt', 'utf8', (err, data) => {
    console.log(data);
    data = data.split('\n');
    console.log(data);
    data = data.map((row) => {
        return row.split('\t').map(n => Number(n));
    })
    console.log(data);

    let reducedData = data.reduce((acc, val) => {
        // return acc + delta(val);
        return acc + partB(val);
    }, 0)

    console.log(reducedData);
})


function delta(arr) {
    if (arr.length < 2) return 0;

    let max = arr[0];
    let min = arr[0];

    arr.forEach(v => {
        if (v > max) max = v;
        if (v < min) min = v;
    })

    return max-min;
}

function partB(arr) {
    if (arr.length < 2) return 0;

    for (let i = 0; i < arr.length-1; i++){
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] % arr[j] === 0) return arr[i] / arr[j];
            if (arr[j] % arr[i] === 0) return arr[j] / arr[i];
        }
    }
}
