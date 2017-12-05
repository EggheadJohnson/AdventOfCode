var fs = require('fs');

var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');
// var inp = [
//     "5 10 25",
//     "3 3 3"
// ]
// console.log(inp.length, inp[0], inp[inp.length-1]);

var count = 0;

var curr = [[],[],[]];
var trio = [];


inp.forEach(function(line){
    console.log(line, line.trim().split(' ').filter(function(d){ return d.length > 0}));
    if (line.length > 0) {
        line = line.trim().split(' ').filter(function(d){ return d.length > 0});
        curr[0].push(line[0]);
        curr[1].push(line[1]);
        curr[2].push(line[2]);
        if (curr[0].length === 3) {
            curr.forEach(function(t){
                trio.push(t);
            });
            curr = [[],[],[]];
        }
    }
});

trio.forEach(function(t){
    console.log(t);
    count += isTri(Number(t[0]), Number(t[1]), Number(t[2])) ? 1 : 0;
})

console.log(count);

function isTri(a, b, c){
    return a+b > c && a+c > b && b+c > a;
}
