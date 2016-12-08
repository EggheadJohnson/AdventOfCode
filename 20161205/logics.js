var crypto = require('crypto');

module.exports = {
    hash: hash,
    hashSearch: hashSearch,
    getPass: getPass,
    getPass2: getPass2
}

function hash(inp){
    var md5sum = crypto.createHash('md5');
    md5sum.update(inp);
    return md5sum.digest('hex');
}

function hashSearch(inp, start){
    var testInp;
    var val = start || 0;
    var md5hex;
    while (true){
        testInp = inp+val;
        md5hex = hash(testInp);
        if (md5hex.indexOf('00000') === 0) return {
            md5hex: md5hex,
            val: val
        };
        val++;
    }
}

function getPass(inp, l){
    var pass = '',
        hs, last;
    l = l || 8;
    while (pass.length < l){
        hs = hashSearch(inp, last);
        pass += hs.md5hex[5];
        last = hs.val+1;
        console.log(pass);
    }
    return pass;
}

function getPass2(inp, l){
    var pass = '________',
        hs, last;
    l = l || 8;
    while (pass.indexOf('_') > -1){
        hs = hashSearch(inp, last);
        if ('01234567'.indexOf(hs.md5hex[5]) > -1 && pass[Number(hs.md5hex[5])] === '_') {
            pass = pass.slice(0,Number(hs.md5hex[5])) + hs.md5hex[6] + pass.slice(Number(hs.md5hex[5])+1);
        }
        // pass += hs.md5hex[5];
        last = hs.val+1;
        console.log(pass, hs);
    }
    return pass;
}
