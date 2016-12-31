"use strict";
module.exports = {
    detectABBA: detectABBA,
    findHS: findHS,
    supportTLS: supportTLS,
    runCheck: runCheck,
    detectABAs: detectABAs,
    breakUpLine: breakUpLine
}

function detectABBA(arr){
    if (!Array.isArray(arr)) arr = [arr];
    return arr.some(function(str){
        for (var i = 0; i < str.length - 3; i++){
            if (str[i] === str[i+3] && str[i+1] === str[i+2] && str[i] !== str[i+1]) return true;
        }
        return false;
    });
}

function detectABAs(arr){
    let returnArr = [];
    if (!Array.isArray(arr)) arr = [arr];
    arr.forEach((str) => {
        for (var i = 0; i < str.length - 2; i++){
            if (str[i] === str[i+2] && str[i] !== str[i+1]) returnArr.push(str.slice(i, i+3));
        }
    });
    return returnArr;
}



function findHS(str){
    var inHS = false;
    var res = [];
    var currWord = '';
    for (var i = 0; i < str.length; i++){
        if (inHS && str[i] !== ']') currWord += str[i];
        else if (str[i] === '[') inHS = true;
        else if (str[i] === ']'){
            res.push(currWord);
            currWord = '';
            inHS = false;
        }
    }
    return res;
}

function breakUpLine(str){
    let inHS = false,
        res = {
            inHS: [],
            outHS: []
        },
        currWord = '';
        for (var i = 0; i < str.length; i++){
            if (str[i] !== ']' && str[i] !== '[') currWord += str[i];
            else if (str[i] === '[') {
                res.outHS.push(currWord);
                currWord = '';
                inHS = true;
            }
            else if (str[i] === ']'){
                res.inHS.push(currWord);
                currWord = '';
                inHS = false;
            }
        }
        if (!inHS) res.outHS.push(currWord);
        //console.log(res);
        return res;
}

function supportTLS(line){
    return detectABBA(line) && !detectABBA(findHS(line));
}

function detectBABs(HSArr, ABAArr, printStuff) {
    return HSArr.some((hs) => {
        return ABAArr.some((aba) => {
            let a = aba[0];
            let b = aba[1];
            if (printStuff && hs.indexOf(b+a+b) > -1) console.log(hs.slice(hs.indexOf(b+a+b), hs.indexOf(b+a+b)+3));
            return hs.indexOf(b+a+b) > -1;
        })
    })
}

function supportSSL(line){
    let HSArr,
        ABAArr;
    HSArr = breakUpLine(line).inHS;
    ABAArr = detectABAs(breakUpLine(line).outHS);
    //console.log(HSArr, ABAArr);
    if (detectBABs(HSArr, ABAArr, true)) /*console.log(HSArr, ABAArr);*/
    return detectBABs(HSArr, ABAArr);
}

function runCheck(arr, bIsActive){
    if (!bIsActive){
        var tot = 0;
        arr.forEach(function(a){
            tot += supportTLS(a) ? 1 : 0;
        });
        return tot;
    }
    else {
        let tot = 0;
        arr.forEach(function(a){
            tot += supportSSL(a) ? 1 : 0;
        });
        return tot;
    }
}
