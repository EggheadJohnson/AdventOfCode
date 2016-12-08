var inp = "R4, R5, L5, L5, L3, R2, R1, R1, L5, R5, R2, L1, L3, L4, R3, L1, L1, R2, R3, R3, R1, L3, L5, R3, R1, L1, R1, R2, L1, L4, L5, R4, R2, L192, R5, L2, R53, R1, L5, R73, R5, L5, R186, L3, L2, R1, R3, L3, L3, R1, L4, L2, R3, L5, R4, R3, R1, L1, R5, R2, R1, R1, R1, R3, R2, L1, R5, R1, L5, R2, L2, L4, R3, L1, R4, L5, R4, R3, L5, L3, R4, R2, L5, L5, R2, R3, R5, R4, R2, R1, L1, L5, L2, L3, L4, L5, L4, L5, L1, R3, R4, R5, R3, L5, L4, L3, L1, L4, R2, R5, R5, R4, L2, L4, R3, R1, L2, R5, L5, R1, R1, L1, L5, L5, L2, L1, R5, R2, L4, L1, R4, R3, L3, R1, R5, L1, L4, R2, L3, R5, R3, R1, L3";
// var inp = "R2, L3";
// var inp = "R2, R2, R2";
// var inp = "R5, L5, R5, R3";
inp = inp.split(', ');
var dir = "N";
var turn = {
    N: {
        L: "W",
        R: "E",
        v: 1,
        i: 0
    },
    S: {
        L: "E",
        R: "W",
        v: -1,
        i: 0
    },
    E: {
        L: "N",
        R: "S",
        v: 1,
        i: 1
    },
    W: {
        L: "S",
        R: "N",
        v: -1,
        i: 1
    }

}
var loc = [0, 0];

inp.forEach(function(step){
    dir = turn[dir][step[0]];
    loc[turn[dir].i] += Number(step.slice(1))*turn[dir].v;
});

console.log(loc);
console.log(Math.abs(loc[0])+Math.abs(loc[1]));
