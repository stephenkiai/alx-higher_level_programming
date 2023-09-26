#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const filmsData = JSON.parse(body).results;
    const wedgeAntillesFilms = filmsData.filter(film =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );
    console.log(wedgeAntillesFilms.length);
  }
});
