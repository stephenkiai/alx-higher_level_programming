#!/usr/bin/node
const axios = require('axios');

(async () => {
  try {
    const response = await axios.get(process.argv[2]);
    console.log(`code: ${response.status}`);
  } catch (error) {
    console.error(error.message);
  }
})();
