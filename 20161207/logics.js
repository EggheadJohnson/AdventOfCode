module.exports = {
    detectABBA: detectABBA,
    findHS: findHS,
    supportTLS: supportTLS,
    runCheck: runCheck
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

function supportTLS(line){
    return detectABBA(line) && !detectABBA(findHS(line));
}

function runCheck(arr){
    var tot = 0;
    arr.forEach(function(a){
        tot += supportTLS(a) ? 1 : 0;
    });
    return tot;
}
