#!/usr/bin/node
// log me
let count = 0;
exports.logMe = function (item) { console.log(`${count++}: ${item}`); };
