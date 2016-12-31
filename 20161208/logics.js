"use strict";

module.exports = {
    arraySum: arraySum,
    newBlock: newBlock,
    rect: rect,
    rotate: rotate,
    runLine: runLine,
    run: run
}

function arraySum(arr){
    let tot = 0;
    if (Array.isArray(arr)){
        arr.forEach((element) => {
            if (Array.isArray(element)) tot += arraySum(element);
            else if (!isNaN(element) && isFinite(element)) tot += element;
        })
    }
    return tot;
}

function newBlock(height, width) {
    let board = [];
    height = height || 6;
    width = width || 50;
    for (let i = 0; i < height; i++){
        let row = [];
        for (let j = 0; j < width; j++) {
            row.push(0);
        }
        board.push(row);
    }
    return board;
}

function rect(block, width, height){
    for (let i = 0; i < width; i++){
        for (let j = 0; j < height; j++){
            block[j][i] = 1;
        }
    }
    return block;
}

function rotate(block, type, number, amount) {
    // console.log(block, type, number, amount);
    for (let j = 0; j < amount; j++){
        if (type === 'row'){
            let tmp = block[number][block[number].length-1];
            for (let i = block[number].length-1; i > 0; i--){
                block[number][i] = block[number][i-1];
            }
            block[number][0] = tmp;
        }
        else if (type === 'column'){
            let tmp = block[block.length-1][number];
            for (let i = block.length - 1; i > 0; i--){
                // console.log(block[i][number], block[i-1][number]);
                block[i][number] = block[i-1][number];
            }
            block[0][number] = tmp;
        }
    }
    return block;
}

function runLine(block, line){
    line = line.split(' ');
    if (line[0] === 'rect'){
        let dim = line[1].split('x');
        block = rect(block, dim[0], dim[1]);
    }
    else {
        // console.log(line);
        block = rotate(block, line[1], line[2].split('=')[1], line[4]);
    }
    return block;
}

function printBlock(block){
    block.forEach((line) => {
        let printLine = '';
        line.forEach((spot) => {
            printLine += {
                '0': '.',
                '1': '#'
            }[spot];
        })
        console.log(printLine);

    })

    console.log();
}

function run(inp, width, height){
    width = width || 50;
    height = height || 6;
    let block = newBlock(height, width);
    inp.forEach((line) => {
        if (line.length > 0) runLine(block, line);
        // printBlock(block);
        // console.log(arraySum(block));
    });
    printBlock(block);
    return arraySum(block);
}
