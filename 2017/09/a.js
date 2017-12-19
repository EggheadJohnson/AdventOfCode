'use strict';
/*

template a

*/

let fs = require('fs');
// // choose just one of the read options
// let inp = require('./a.in.js');
let inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split(',').map(n => Number(n));
// //
let out;
let pow = require('../../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    let out;
    let arr = [];
    let pos = 0;
    let skip = 0;
    for (let i = 0; i < 256; i++) {
        arr.push(i);
    }

    inp.forEach(i => {
        arr = logics.reverseSubArray(arr, pos, i);
        pos += skip + i;
        skip++;
        // console.log(arr, pos, skip);
    })


    out = arr[0]*arr[1];

    return out;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
