var fs = require('fs');

var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// var inp = [
//     "5 10 25",
//     "3 3 3"
// ]
// console.log(inp.length, inp[0], inp[inp.length-1]);

var count = 0;

inp.forEach(function(line){
    console.log(line, line.trim().split(' ').filter(function(d){ return d.length > 0}));
    if (line.length === 0);
    else{
        line = line.trim().split(' ').filter(function(d){ return d.length > 0});
        count += isTri(Number(line[0]), Number(line[1]), Number(line[2])) ? 1 : 0;
        // if (isTri(Number(line[0]), Number(line[1]), Number(line[2]))) console.log(line);
    }
});

console.log(count);

function isTri(a, b, c){
    return a+b > c && a+c > b && b+c > a;
}
