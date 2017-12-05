'use strict';

/*

template a

*/

var fs = require('fs');
// // choose just one of the read options
// var inp = require('./a.in.js');
var inp = fs.readFileSync('./05/inp.txt', {encoding: 'utf8'}).split('\n').map(n => Number(n));

inp = inp.slice(0, inp.length-1);
// //
var out;
var pow = require('../../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    var out;
    let x = 0;
    let steps = 0;
    while (x >= 0 && x < inp.length) {

      console.log({inp, x});
      let t = inp[x];
      inp[x]++;

      x += t;
      steps++;
    }

    return steps;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
