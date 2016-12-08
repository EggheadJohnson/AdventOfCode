"use strict";

let gulp = require('gulp'),
    dateString = require('./helpers/dateStringForFileNames'),
    minimist = require('minimist'),
    folderName;

var knownOptions = {
    string: 'date',
    default: { env: dateString }
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('new-day', () => {

    // if (process.argv.length > 3) folderName = process.argv[3];
    // console.log(process.argv);
    folderName = options.date;
    // folderName = process.argv[3] || dateString;
    // console.log(folderName);
    //
    console.log("creating new day: "+folderName);
    gulp.src('./templates/*')
        .pipe(gulp.dest('./'+folderName));
})
