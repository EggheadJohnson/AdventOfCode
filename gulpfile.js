"use strict";

let gulp = require('gulp'),
    dateString = require('./helpers/dateStringForFileNames');

gulp.task('new-day', () => {

    console.log("creating new day: "+dateString);
    gulp.src('./templates/*')
        .pipe(gulp.dest('./'+dateString));
})
