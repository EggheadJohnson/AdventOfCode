/*

template b

*/

var fs = require('fs');
// // choose just one of the read options
// var inp = require('./a.in.js');
var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// //
var out;
var pow = require('../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    var out;
    out = logics.rotate(inp);
    // console.log(out);
    out = logics.construct(out, 'least');

    return out;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
