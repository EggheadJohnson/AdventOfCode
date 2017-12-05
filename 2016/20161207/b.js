/*

template a

*/

var fs = require('fs');
// // choose just one of the read options
// var inp = require('./a.in.js');
var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// var inp = ["aba[bab]xyz",
//             "xyx[xyx]xyx",
//             "aaa[kek]eke",
//             "zazbz[bzb]cdb"];
// //
var out;
var pow = require('../helpers/printOrWrite')(),
    logics = require('./logics');


function run(inp){
    var out;
    out = logics.runCheck(inp, true);
    return out;
}

out = run(inp);


pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
