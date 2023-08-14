#!/usr/bin/node
// add 2 integers

function add (a, b) {
  return a + b;
}

const args1 = parseInt(process.argv[2]);
const args2 = parseInt(process.argv[3]);

if (!isNaN(args1) && !isNaN(args2)) {
  const result = add(args1, args2);
  console.log(result);
} else {
  console.log('NaN');
}
