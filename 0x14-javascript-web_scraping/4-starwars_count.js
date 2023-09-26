#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (!error) {
    const count = JSON.parse(body).results.reduce(
      (count, movie) => count + movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'),
      0
    );
    console.log(count);
  }
});
