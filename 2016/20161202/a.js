var pad = [[1,2,3],[4,5,6],[7,8,9]];

var dir = {
    U: [-1,0],
    D: [1,0],
    R: [0,1],
    L: [0,-1]
}

var curr = [1,1];

var inp = require('./a.in');
// var inp = [
//     "ULL",
// "RRDDD",
// "LURDL",
// "UUUUD"
// ]

var ans = '';

inp.forEach(function(row){
    // console.log(row);
    row.split('').forEach(function(d){
        // console.log(d);
        curr[0] += dir[d][0];
        curr[1] += dir[d][1];
        curr[0] = curr[0] < 0 ? 0 : curr[0] > 2 ? 2 : curr[0];
        curr[1] = curr[1] < 0 ? 0 : curr[1] > 2 ? 2 : curr[1];
    });
    ans += pad[curr[0]][curr[1]];
});

console.log(ans);
