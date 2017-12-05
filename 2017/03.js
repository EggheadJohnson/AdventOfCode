'use strict';

// Part A: Hacky and not fancy
// function bottomRight(n) {
//
//     return Math.floor(Math.sqrt(n))%2 === 0 ? Math.floor(Math.sqrt(n))+1 : Math.floor(Math.sqrt(n))+2;
// }
//
// function findSideCenters(n) {
//     let sl = bottomRight(n);
//     let br = sl*sl;
//
//     sl -= 1;
//
//     let corners = [br, br-sl, br-sl-sl, br-sl-sl-sl, br-sl-sl-sl-sl];
//     // console.log(corners);
//
//     let centers = corners.slice(1).map((c, idx) =>  (c+corners[idx])/2);
//
//     return centers;
//
// }
//
// function findPos(n) {
//
//     let centers = findSideCenters(n);
//
//     let radius = (bottomRight(n) - 1)/2;
//
//     let distances = centers.map(c => Math.abs(n-c));
//
//     console.log(centers, n);
//
//     let minDist = distances.reduce((acc, val) => val < acc ? val : acc);
//
//     console.log(distances);
//
//     return minDist+radius;
//
//
//
//
// }
//
// console.log(findPos(12));
// console.log(findPos(23));
// console.log(findPos(1024));
//
// console.log(findPos(277678));


// Part B:

function blankGridBuilder(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([]);
        for (let j = 0; j < n; j++) arr[i].push(0);
    }

    return arr;
}

function fillInGrid(n) {

    let g = blankGridBuilder(n);
    let center = (g.length - 1)/2;

    let x = center;
    let y = center;
    g[x][y] = 1;
    x++;
    let step = [0,-1];
    let pivot = [-1, 0];

    for (let i = 0; i < n*n-1; i++) {
        g[x][y] = sum(g, x, y);
        if (g[x][y] > 277678) console.log(g[x][y]);

        // console.log({g, x, y});
        // console.log("before",{step, pivot});

        x += step[0];
        y += step[1];

        if (g[x+pivot[0]][y+pivot[1]] !== 0) {}

        else {
            let ty = step[0];
            step[0] = step[1];
            step[1] = ty*-1;

            ty = pivot[0];
            pivot[0] = pivot[1];
            pivot[1] = ty*-1;
        }

        // console.log("after",{step, pivot});
    }



    return g;
}

function sum(g, x, y) {
    let acc = 0;
    if (x > 0) {
        acc += g[x-1][y-1] ? g[x-1][y-1] : 0;
        acc += g[x-1][y] ? g[x-1][y] : 0;
        acc += g[x-1][y+1] ? g[x-1][y+1] : 0;
    }
    acc += g[x][y-1] ? g[x][y-1] : 0;
    acc += g[x][y+1] ? g[x][y+1] : 0;
    if (x < g.length - 1) {
        acc += g[x+1][y-1] ? g[x+1][y-1] : 0;
        acc += g[x+1][y] ? g[x+1][y] : 0;
        acc += g[x+1][y+1] ? g[x+1][y+1] : 0;
    }

    return acc;
}

console.log(fillInGrid(11));

// let a = [
//     [1,1,0],
//     [0,0,0],
//     [0,0,0]
// ]
//
// console.log(a);
//
// for (let x = 0; x < a.length; x++) {
//     for (let y = 0; y < a.length; y++) {
//         console.log(x, y, sum(a, x, y));
//         a[x][y] = sum(a, x, y);
//     }
// }
//
// console.log(a);
