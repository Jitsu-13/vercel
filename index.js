// const app = require('./src/app.js');
// const port = process.env.PORT || 8001;
const express = require('express')
const app = express()
const PORT = 4000

app.get('/home', (req, res) => {
   res.status(200).json('Welcome, your app is working well');
 })

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});

module.exports = app