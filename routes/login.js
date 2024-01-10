// Assuming you have an Express.js server
const express = require('express');
const app = express();

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

// Your other routes...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
