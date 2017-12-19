'use strict';

module.exports = {
    runOps: runOps,
    findGreatest: findGreatest,
    findGreatestEver: findGreatestEver
}

let tfm = {};
let counter = 0;

function runOps(operations, registers) {
    registers = registers || {};

    operations.forEach(o => {
        if (!registers[o.register]) registers[o.register] = 0;
        if (!registers[o.testRegister]) registers[o.testRegister] = 0;

        if (checkTest(o, registers)) {
            registers = processOperation(o, registers);

        }
        tfm[counter] = findGreatest(registers);
        counter++;

    })
    return registers;
}

function checkTest(o, registers) {
    // console.log(o.testRegister, registers[o.register], o.operator, o.testVal);
    switch (o.operator) {
        case '>':
            return registers[o.testRegister] > o.testVal;
            break;
        case '<':
            return registers[o.testRegister] < o.testVal;
            break;
        case '>=':
            return registers[o.testRegister] >= o.testVal;
            break;
        case '<=':
            return registers[o.testRegister] <= o.testVal;
            break;
        case '==':
            return registers[o.testRegister] == o.testVal;
            break;
        case '!=':
            return registers[o.testRegister] != o.testVal;
            break;

    }
}

function processOperation(o, registers) {
    // console.log(registers);
    switch (o.operation) {
        case 'inc':
            registers[o.register] += o.amount;
            break;
        case 'dec':
            registers[o.register] -= o.amount;
            break;
    }
    return registers;
}

function findGreatest(registers) {
    let max;
    Object.keys(registers).forEach(k => {
        if (!max || registers[k] > max) max = registers[k];
    })
    return max;
}

function findGreatestEver() {
    // console.log(tfm);
    return findGreatest(tfm);
}
