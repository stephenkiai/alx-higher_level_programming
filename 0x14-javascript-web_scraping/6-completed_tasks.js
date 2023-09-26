#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const todos = JSON.parse(body);
    const completedTasksByUser = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        if (!completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId] = 1;
        } else {
          completedTasksByUser[todo.userId]++;
        }
      }
    });

    Object.keys(completedTasksByUser).forEach((userId) => {
      console.log(`User ID ${userId}: ${completedTasksByUser[userId]} completed tasks`);
    });
  } else {
    console.error('An error occurred:', error || `HTTP Status Code: ${response.statusCode}`);
  }
});
