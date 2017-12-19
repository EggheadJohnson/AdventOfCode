'use strict';
/*

template b

*/

let fs = require('fs');
// // choose just one of the read options
// let inp = require('./a.in.js');
let inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).trim().split('').map(n => n.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
// //
let out;
let pow = require('../../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    let out;
    let arr = [];
    let pos = 0;
    let skip = 0;
    console.log(inp);
    for (let i = 0; i < 256; i++) {
        arr.push(i);
    }
    //
    for (let i = 0; i < 64; i++) {
        inp.forEach(i => {
            arr = logics.reverseSubArray(arr, pos, i);
            pos += skip + i;
            skip++;
            // console.log(arr, pos, skip);
        })
    }
    let outp = [];
    for (let x = 0; x < 16; x++) {
        let slice = arr.slice(16*x, 16*(x+1));
        console.log(slice, slice.length);
        let xor = slice.reduce((acc, val) => {
            return acc^val;
        }, 0);
        outp.push(xor);
    }
    console.log(outp);
    outp = outp.map(n => {
        return n.toString(16).length < 2 ? '0'+n.toString(16) : n.toString(16);
    })
    console.log(outp);

    return outp.join('');

    //
    //
    // out = arr[0]*arr[1];
    //
    // return out;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
