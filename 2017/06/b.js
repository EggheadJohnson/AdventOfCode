'use strict';
/*

template b

*/

// var fs = require('fs');
// // choose just one of the read options
let inp = [10,	3,	15,	10,	5,	15,	5,	15,	9,	2,	5,	8,	5,	2,	3,	6];
// let inp = [0, 2, 7, 0];
let seen = {};
// var inp = require('./a.in.js');
// var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// //
var out;
// var pow = require('../helpers/printOrWrite')(),
//     logics = require('./logics');


function run(inp){

  var out = 0;

  while(!checkArrangement(inp)){
    // console.log({inp, out});
    let idx = findHighestIdx(inp);
    inp = redistribute(inp, idx);
    out++;
  }
  out = 0;
  seen = {};
  while(!checkArrangement(inp)){
    // console.log({inp, out});
    let idx = findHighestIdx(inp);
    inp = redistribute(inp, idx);
    out++;
  }
  return out;
    
}

out = run(inp);
console.log(out);


function checkArrangement(inp) {

  let inpStr = inp.join(',');
  if (seen[inpStr]) return true;
  seen[inpStr] = 1;
  return false;
}

function findHighestIdx(inp) {
  let max = inp[0];
  let midx = 0;
  inp.forEach((n, idx) => {
    if (n > max) {
      max = n;
      midx = idx;
    }
  })
  return midx;
}

function redistribute(inp, idx){
  let total = inp[idx];
  inp[idx] = 0;
  idx++;
  while (total > 0) {
    inp[idx%inp.length]++;
    idx++;
    total--;

  }
  return inp;
}

// pow(out, function(err){
//     if (err) console.log(err);
//     else console.log('done');
// })
