// Import the 'createServer function from the 'http' module
import { createServer } from 'http';

// create a server using the 'create server' function
const server = createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

// Specify port number
const PORT = 8080;

// start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});