import { promises as fs } from 'fs';

fs.unlink('new_file.txt')
.then(() => console.log('File Deleted!'))
.catch(err => console.error(err));