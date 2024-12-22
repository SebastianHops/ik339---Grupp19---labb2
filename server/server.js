const express = require('express'); // Används för att skapa en webbserver
const server = express(); // Skapar en instans av servern
const sqlite3 = require('sqlite3').verbose(); //sqlite används för att lagra databas utan att kräva en separat server

// Övergripande inställningar för servern
server
  .use(express.json()) // Gör så att servern kan servern kan hantera json-data
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    // CORS inställningar för att tillåta förfrågningar från andra domäner
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

// Hanterar get förfrågningar till /users
server.get('/users', (req, res) => {
  const db = new sqlite3.Database('./gik339-labb2.db'); // Skapar en anslutning till lokala databasen
  const sql = 'Select * FROM users'; //SQL fråga, tar alla rader från users tabellen
  db.all(sql, (err, rows) => {
    // Hämtar all data från sql variabeln och skickar resultatet (rows) till klienten i json format om frågan lyckas, annars skickas ett error meddelande
    res.send(rows);
  });
});

// Startar servern och på port 3000
server.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
