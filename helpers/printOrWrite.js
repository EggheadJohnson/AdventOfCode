"use strict";
let dateString = require('./dateStringForFileNames'),
    fs = require('fs');

// console.log(process.argv);
function powMaker(outputOption, folder){
    if (outputOption === 'write'){
        folder = folder || dateString;
        return fs.writeFileSync.bind(this, folder+'/out');
    }
    else {
        return (function(str, cb){
            console.log(str);
            cb();
        });
    }
}

module.exports = powMaker;
