const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from React app
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers

  if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.writeHead(204); // No content
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/api/appointments') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Convert Buffer to string
    });

    req.on('end', () => {
      try {
        const appointmentData = JSON.parse(body);
        console.log('Received appointment data:', appointmentData);

        const filePath = './appointments.json';
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading file:', err);
            return res.writeHead(500).end('Error reading file');
          }

          const appointments = data ? JSON.parse(data) : [];
          appointments.push(appointmentData);

          fs.writeFile(filePath, JSON.stringify(appointments, null, 2), (err) => {
            if (err) {
              console.error('Error writing file:', err);
              return res.writeHead(500).end('Error writing file');
            }
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Appointment scheduled successfully' }));
          });
        });
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.writeHead(400).end('Invalid JSON');
      }
    });
  } else {
    res.writeHead(404).end('Not Found');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
