var pad = [
    ['.','.',1,'.','.'],
    ['.',2,3,4,'.'],
    [5,6,7,8,9],
    ['.','A','B','C','.'],
    ['.','.','D','.','.']
];

var dir = {
    U: [-1,0],
    D: [1,0],
    R: [0,1],
    L: [0,-1]
}

var curr = [2,0];

var inp = require('./a.in');
// var inp = [
//     "ULL",
// "RRDDD",
// "LURDL",
// "UUUUD"
// ]

function move(pos, d){
    var board = [
        ['.','.',1,'.','.'],
        ['.',2,3,4,'.'],
        [5,6,7,8,9],
        ['.','A','B','C','.'],
        ['.','.','D','.','.']
    ];
    var newPos = pos.slice();
    newPos[0] += dir[d][0];
    newPos[1] += dir[d][1];
    newPos[0] = newPos[0] < 0 ? 0 : newPos[0] > 4 ? 4 : newPos[0];
    newPos[1] = newPos[1] < 0 ? 0 : newPos[1] > 4 ? 4 : newPos[1];
    return board[newPos[0]][newPos[1]] === '.' ? pos : newPos;
}

var ans = '';

inp.forEach(function(row){
    // console.log(row);
    row.split('').forEach(function(d){
        // console.log(d);
        curr = move(curr, d);
    });
    ans += pad[curr[0]][curr[1]];
});

console.log(ans);
