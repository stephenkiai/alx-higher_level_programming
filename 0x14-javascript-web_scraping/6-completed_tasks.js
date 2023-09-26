#!/usr/bin/node

const request = require('request');
request(process.argv[2], function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    const complete = {};
    todos.forEach((todo) => {
      if (todo.complete && complete[todo.userId] === undefined) {
        complete[todo.userId] = 1;
      } else if (todo.complete) {
        complete[todo.userId] += 1;
      }
    });
    console.log(complete);
  }
});
