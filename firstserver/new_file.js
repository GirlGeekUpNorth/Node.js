import { promises as fs } from 'fs';

fs.appendFile('new_file.txt', 'Hello, World!')
  .then(() => console.log('Saved!'))
  .catch(err => {
    throw err;
  });