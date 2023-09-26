#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (!error) {
    const filmsData = JSON.parse(body).results;
    const count = filmsData.filter(movie =>
      movie.characters.some(character =>
        character === 'https://swapi-api.alx-tools.com/api/people/18/'
      )
    ).length;
    console.log(count);
  }
});
