'use strict';
/*

template b

*/

let fs = require('fs');
// // choose just one of the read options
// let inp = require('./a.in.js');
let inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
inp = inp.slice(0, inp.length-1);
// //
let out;
let pow = require('../../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    console.log(inp);
    let out = logics.kidWeights(inp);

    return out;
}

out = run(inp);


// pow(out, function(err){
//     if (err) console.log(err);
//     else console.log('done');
// })
