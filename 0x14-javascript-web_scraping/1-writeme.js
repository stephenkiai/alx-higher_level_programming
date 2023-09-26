#!/usr/bin/node
const fs = require('fs').promises;

(async () => {
  try {
    await fs.writeFile(process.argv[2], process.argv[3]);
  } catch (error) {
    console.error(error);
  }
})();
