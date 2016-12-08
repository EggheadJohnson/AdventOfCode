/*

template a

*/

var fs = require('fs');
// // choose just one of the read options
// var inp = require('./a.in.js');
var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n')[0];
// inp = 'abc';
// //
var out;
var pow = require('../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    var out;
    out = logics.getPass(inp,8);
    return out || 0;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
