/*

template a

*/

var fs = require('fs');
// // choose just one of the read options
// var inp = require('./a.in.js');
// var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// //
var out;
var pow = require('../helpers/printOrWrite')(),
var logics = require('./logics');


// logic goes here!


// logic ends here

pow(out, function(err){
    if (err) console.log(err);
    else console.log('done');
})
