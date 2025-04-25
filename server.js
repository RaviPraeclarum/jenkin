const express = require('express');
const app = express();
const port = 3000;

// Basic GET endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Ravi How are you!' });
});

app.get('/app', (req, res) => {
  res.send(`Hello, Server running on http://localhost:${port}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
