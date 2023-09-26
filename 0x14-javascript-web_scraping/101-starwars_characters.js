#!/usr/bin/node
const request = require('request');

const url = 'http://swapi.co/api/films/';
let id = parseInt(process.argv[2], 10);

const fetchMovieData = async () => {
  try {
    const { results } = await new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(body));
        }
      });
    });

    if (id < 4) {
      id += 3;
    } else {
      id -= 3;
    }

    const movie = results.find((result) => result.episode_id === id);

    if (movie) {
      const characterNames = await Promise.all(
        movie.characters.map(async (characterUrl) => {
          const { name } = await new Promise((resolve, reject) => {
            request(characterUrl, (error, response, body) => {
              if (error) {
                reject(error);
              } else {
                resolve(JSON.parse(body));
              }
            });
          });
          return name;
        })
      );

      console.log(`Characters in Episode ${id}:`);
      characterNames.forEach((name) => console.log(name));
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

fetchMovieData();
