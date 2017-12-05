'use strict';

const fs = require('fs');

let tot = 0;

fs.readFile('./inputs/04.txt', 'utf8', (err, data) => {
    console.log(data);
    data = data.split('\n');
    console.log(data);
    data = data.map((row) => {
        return row.split(' ');
    })
    console.log(data);

    // let ans = data.reduce((acc, val) => {
    //     let vo = {};
    //     for (let i = 0; i < val.length; i++) {
    //         if (vo[val[i]]) return acc;
    //         vo[val[i]] = 1;
    //     }
    //     return acc + 1;
    // }, 0);
    //
    // console.log(ans-1);
    let ans = data.reduce((acc, val) => {
        let vo = {};
        for (let i = 0; i < val.length; i++) {

            let word = val[i].split('').sort((a, b) => a > b).join('');

            if (vo[word]) return acc;


            vo[word] = 1;
        }
        return acc + 1;
    }, 0);

    console.log(ans-1);

})
