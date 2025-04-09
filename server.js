const express = require('express');
const app = express();
const port = 3000;

// Basic GET endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
