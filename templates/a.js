'use strict';
/*

template a

*/

let fs = require('fs');
// // choose just one of the read options
// let inp = require('./a.in.js');
// let inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// //
let out;
let pow = require('../../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    let out;

    return out;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
