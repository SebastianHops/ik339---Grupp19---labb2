const express = require('express');
const server = express();
const cors = require('cors'); // Vi fick lov att installera cors för att det skulle fungera

const sqlite3 = require('sqlite3').verbose();
server.use(cors());

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
server.get('/users', (req, res) => {
  const db = new sqlite3.Database('./gik339-labb2.db');
  const sql = 'Select * FROM users';
  db.all(sql, (err, rows) => {
    res.send(rows);
  });
});

server.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
