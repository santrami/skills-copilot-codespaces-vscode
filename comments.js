// Create web server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse all requests as JSON
app.use(bodyParser.json());

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Create comments array
const comments = [];

// GET /comments
// Return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Listen on port 3001
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});