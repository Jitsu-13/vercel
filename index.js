// const app = require('./src/app.js');
// const port = process.env.PORT || 8001;

const express = require('express')
const app = express()
const PORT = 4000



app.get('/app/login-employee', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app

// // Server
// app.listen(port, () => {
//    console.log(`Listening on: http://localhost:${port}`);
// });

