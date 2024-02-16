import { createServer } from 'http';
import { promises as fs } from 'fs';

const server = createServer((req, res) => {
  (async () => {
    try {
      const data = await fs.readFile('demofile.html');
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    } catch (err) {
      res.writeHead(500);
      res.write('An error occurred');
      res.end();
      console.error(err);
    }
  })();
});

// Specify port number
const PORT = 8080;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});