import { promises as fs } from 'fs';

fs.rename('new_file.txt', 'renamed_file.txt')
  .then(() => console.log('File Renamed!'))
  .catch(err => console.error(err));