"use strict";

let currentDay = new Date(),
    dateString,
    year,
    month,
    date;

year = currentDay.getFullYear();
month = currentDay.getMonth() + 1;
date = currentDay.getDate();
date = date < 10 ? '0' : '';
date += currentDay.getDate()+1;
dateString = ''+year+month+date;

module.exports = date;
