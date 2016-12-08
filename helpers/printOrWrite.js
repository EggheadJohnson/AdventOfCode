"use strict";
let dateString = require('./dateStringForFileNames'),
    fs = require('fs');

// console.log(process.argv);
function powMaker(outputOption){
    if (outputOption === 'write'){
        return fs.writeFileSync.bind(this, dateString+'/out');
    }
    else {
        return (function(str, cb){
            console.log(str);
            cb();
        });
    }
}

module.exports = powMaker;
