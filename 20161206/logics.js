module.exports = {
    rotate: rotate,
    parse: parse,
    construct: construct,
    parseLeast: parseLeast
}

function rotate(inp){
    var outp = [];
    inp.forEach(function(line){
        for (var i = 0; i < line.length; i++){
            if (outp.length === i) outp.push({});
            outp[i][line[i]] = outp[i][line[i]] === undefined ? 1 : outp[i][line[i]] + 1;
        }
    })
    return outp;
}

function parse(obj){
    var max = -1,
        key;
    for (var k in obj){
        if (obj[k] > max){
            key = k;
            max = obj[k];
        }
    }
    return key;
}

function construct(arr, type){
    var word = '';
    type = type || 'most';
    arr.forEach(function(obj, idx){

        if (type === 'most') word += parse(obj);
        else if (type === 'least') word += parseLeast(obj);
    })
    return word;
}

function parseLeast(obj){
    var min,
        key;
    for (var k in obj){
        if (!min || obj[k] < min){
            min = obj[k];
            key = k;
        }
    }
    return key;
}
