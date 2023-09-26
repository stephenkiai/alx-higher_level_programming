#!/usr/bin/node
const request = require('request');
const { argv } = require('process');

const movieId = argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    console.log(`Characters in "${movieData.title}":`);
    
    movieData.characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (!charError && charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        } else {
          console.error(`Error fetching character: ${charError || charResponse.statusCode}`);
        }
      });
    });
  } else {
    console.error(`Error fetching movie: ${error || response.statusCode}`);
  }
});
