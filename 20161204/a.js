var fs = require('fs');

var inp = fs.readFileSync('inp.txt', {encoding: 'utf8'}).split('\n');

var ans = 0;
var tot = 0;

inp.forEach(function(line){
    var parsedLine = parseLine(line);
    // console.log(line);
    // console.log(line, parsedLine, parsedLine.calcCheckSum === parsedLine.checkSum);

    if (line && parsedLine.calcCheckSum === parsedLine.checkSum) ans += Number(parsedLine.sectorId);
    // else if (line) {
    //     console.log(line, parsedLine);
    //     tot += 1;
    // }
    // tot += Number(parsedLine.sectorId);
});

console.log(ans);
console.log(tot);



function parseLine(line){
    var name = '',
        sectorId = '',
        checkSum = '',
        useCS = false,
        freqObj,
        letters,
        boundSort,
        parsedLine;
    for (var i = 0; i < line.length; i++){
        if (useCS && line[i] !== ']') checkSum += line[i];
        else if (line[i] === '[') useCS = true;
        else if (!isNaN(line[i])) sectorId += line[i];
        else if (line[i] !== ']') name += line[i];
    }
    freqObj = getFreqs(name);
    letters = Object.keys(freqObj).slice();
    var boundSort = mySort.bind(this, freqObj);
    letters.sort(boundSort);
    // console.log(letters);
    parsedLine = {
        name: name,
        sectorId: sectorId,
        calcCheckSum: letters.slice(0, 5).join(''),
        checkSum: checkSum,
        freqObj: freqObj
    }
    lettersB = Object.keys(freqObj).slice();
    lettersB = psort(letters, freqObj);
    if (lettersB.join('').slice(0, 5) !== parsedLine.calcCheckSum) console.log(lettersB.join(''),'\n'+letters.join(''));
    return parsedLine;
}

function getFreqs(name){
    var freqObj = {};
    for (var i = 0; i < name.length; i++){
        if (name[i] !== '-'){
            freqObj[name[i]] = freqObj[name[i]] === undefined ? 1 : freqObj[name[i]] + 1;
        }
    }
    return freqObj;
}

function mySort(freqObj, a, b){
    if (freqObj[a] === freqObj[b]) return a > b ? 1 : -1;
    else return freqObj[a] < freqObj[b] ? 1 : -1;
}

function myScore(freqObj, key){
    var letters = 'zyxwvutsrqponmlkjihgfedcba';
    return Math.pow(10, freqObj[key]+2)+letters.indexOf(key);
}

function psort(letters, freqObj){
    var keys = Object.keys(freqObj);
    var pivot = {};
    var retVal = [];
    for (var k in freqObj){
        // pivot[freqObj[k]] = pivot[freqObj[k]] === undefined ? [freqObj[k]] : pivot[freqObj[k]].push(k);
        if (pivot[freqObj[k]]){
            pivot[freqObj[k]].push(k);
        }
        else pivot[freqObj[k]] = [ k ];
    }

    keys = Object.keys(pivot);
    keys.sort(function(a, b){
        return a < b;
    });
    // console.log(keys);

    // console.log(pivot);

    keys.forEach(function(k){
        retVal = retVal.concat(pivot[k].sort(function(a, b){return a > b;}))
    })
    return retVal;
    // console.log(retVal);

}
