#!/usr/bin/node
// x times "c is fun"

const args = process.argv[2];
const x = parseInt(args);

if (!isNaN(x)) {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
