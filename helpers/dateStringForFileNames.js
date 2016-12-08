"use strict";

let currentDay = new Date(),
    dateString;
dateString = '' + currentDay.getFullYear() + (currentDay.getMonth()+ 1) + currentDay.getDate().length === 1 ? '0':'' + currentDay.getDate();

module.exports = dateString;
