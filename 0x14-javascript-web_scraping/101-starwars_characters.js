#!/usr/bin/node
const request = require('request');
const { argv } = require('process');

const movieId = argv[2];

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    
    console.log(`Characters in "${movieData.title}":`);
    
    // Iterate through characters in the same order as the list in the /films/ response
    movieData.characters.reduce((promise, characterUrl) => {
      return promise.then(() => {
        return new Promise((resolve) => {
          request(characterUrl, (charError, charResponse, charBody) => {
            if (!charError && charResponse.statusCode === 200) {
              const characterData = JSON.parse(charBody);
              console.log(characterData.name);
            }
            resolve();
          });
        });
      });
    }, Promise.resolve());
  } else {
    console.error(`Error fetching movie: ${error || response.statusCode}`);
  }
});
