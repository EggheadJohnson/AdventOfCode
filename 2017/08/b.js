'use strict';
/*

template b

*/

let fs = require('fs');
// // choose just one of the read options
// let inp = require('./a.in.js');
let inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');

inp = inp.slice(0, inp.length-1).map(i => {
    i = i.split(' ');
    let o = {
        register: i[0],
        operation: i[1],
        amount: Number(i[2]),
        if: i[3],
        testRegister: i[4],
        operator: i[5],
        testVal: Number(i[6]),
    }
    return o;
})
// //
let out;
let pow = require('../../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    // console.log(inp);

    let out = logics.runOps(inp);
    out = logics.findGreatestEver();

    return out;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
