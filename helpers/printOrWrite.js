"use strict";
let dateString = require('./dateStringForFileNames'),
    fs = require('fs');

const util = require('util');

// console.log(process.argv);
function powMaker(outputOption, folder){
    if (outputOption === 'write'){
        folder = folder || dateString;
        return fs.writeFileSync.bind(this, folder+'/out');
    }
    else {
        return (function(str, cb){
            console.log(util.inspect(str, {depth: null}));
            cb();
        });
    }
}

module.exports = powMaker;
