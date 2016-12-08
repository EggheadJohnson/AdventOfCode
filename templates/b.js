/*

template b

*/

var fs = require('fs');
// // choose just one of the read options
// var inp = require('./a.in.js');
// var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// //
var out;
var pow = require('../helpers/printOrWrite')();


// logic goes here!
console.log(inp);
out = inp;

// logic ends here

pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
