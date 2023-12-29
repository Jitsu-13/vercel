// const express = require('express')
// const app = express()
// const PORT = 4000
// var AppController = require('./src/controllers/AppController');
// const { check } = require('express-validator');
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET;

// app.post('/app/login-employee', [
//    check('mobile').trim().isLength({ min: 1 }).withMessage('Enter mobile number'),
//    check('password').trim().isLength({ min: 1 }).withMessage('Enter password')
// ], AppController.get_employee)

// // Server
// app.listen(port, () => {
//    console.log(`Listening on: http://localhost:${port}`);
// });

//  // Export the Express API
//  module.exports = app
const express = require('express');
const app = express();
const PORT = 4000;
var AppController = require('./src/controllers/AppController');
const { check } = require('express-validator');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

app.post('/app/login-employee', [
   check('mobile').trim().isLength({ min: 1 }).withMessage('Enter mobile number'),
   check('password').trim().isLength({ min: 1 }).withMessage('Enter password')
], AppController.get_employee);

// Server
app.listen(PORT, () => {
   console.log(`Listening on: http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;
