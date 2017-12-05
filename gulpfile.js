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

    let date = new Date();

    let year = date.getFullYear();
    let day = date.getDate()+1;

    day = day < 10 ? '0'+day : ''+day;

    folderName = options.date || day;

    console.log("creating new day: "+folderName);
    gulp.src('./templates/*')
        .pipe(gulp.dest(`./${year}/`+folderName));
})
