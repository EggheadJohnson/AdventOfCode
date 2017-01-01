"use strict";
module.exports = {
    run: run,
    runb: runb
}

function run(inp){
    let outp = '';
    if (Array.isArray(inp)) inp = inp[0];
    for (let i = 0; i < inp.length; i++){
        if (inp[i] === '(') {
            let marker = inp.slice(i+1, i+inp.slice(i).indexOf(')')).split('x').map((a) => {return Number(a)});
            let add = inp.slice(inp.slice(i).indexOf(')')+1+i, inp.slice(i).indexOf(')')+1+marker[0]+i);
            for (var j = 0; j < marker[1]; j++){
                outp += add;
            }
            i += inp.slice(i).indexOf(')')+marker[0];
        }
        else {
            outp += inp[i];
        }
        console.log(outp);
    }
    return outp.length;
}

function runb(inp){
    let outp = 0;
    if (Array.isArray(inp)) inp = inp[0];
    for (let i = 0; i < inp.length; i++){
        if (inp[i] === '(') {
            let marker = inp.slice(i+1, i+inp.slice(i).indexOf(')')).split('x').map((a) => {return Number(a)});
            let add = inp.slice(inp.slice(i).indexOf(')')+1+i, inp.slice(i).indexOf(')')+1+marker[0]+i);
            add = runb(add);
            for (let j = 0; j < marker[1]; j++) {
                try {outp += add;}
                catch (err) {
                    console.log(err);
                }
            }
            i += inp.slice(i).indexOf(')')+marker[0];
        }
        else outp += 1;
    }
    return outp;
}
