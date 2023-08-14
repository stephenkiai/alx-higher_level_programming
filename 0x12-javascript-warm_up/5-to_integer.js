#!/usr/bin/node
// convert to integer
const arg = process.argv[2];
const parsed = parseInt(arg);

if (!isNaN(parsed)) {
  console.log(`My number: ${parsed}`);
} else {
  console.log('Not a number');
}
