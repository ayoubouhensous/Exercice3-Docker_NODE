const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d’accueil !');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/api/info', (req, res) => {
  res.json({ node_version: process.version, env: process.env.NODE_ENV || 'development' });
});

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
