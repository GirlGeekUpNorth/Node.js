import { promises as fs } from 'fs';

fs.appendFile('new_file.txt', ' This is some additional text.')
  .then(() => console.log('Updated!'))
  .catch(err => console.error(err));