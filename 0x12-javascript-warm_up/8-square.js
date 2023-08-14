#!/usr/bin/node
// square

const args = process.argv[2];
const size = parseInt(args);

if (!isNaN(size)) {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
} else {
  console.log('Missing size');
}
