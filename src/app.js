// const express       = require('express');
// var bodyParser      = require('body-parser');
// var cors            = require('cors');
// var dotenv          = require('dotenv');
// var MongoClient     = require('mongoose');

// const app = express();
// app.use(cors());

// // Enable environment variable
// dotenv.config();

// // Connection to MongoDB server 
// MongoClient.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology: true},function(){
//     console.log('Connect to MongoDB');
// });

// MongoClient.set('useFindAndModify', false);
// MongoClient.set('useCreateIndex', true);

// app.use(bodyParser.urlencoded({
//     extended:true,
//     limit: '10mb',
//     parameterLimit: 100000
// }));
// app.use(bodyParser.json()); // take json data

// app.use(express.static('public'));
// app.use('/',express.static('public'));

// process.env.TZ = 'Asia/Kolkata'; // here is the magical line

// require('./router/admin.js')(app);
// require('./router/app.js')(app);
// module.exports = app;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '10mb',
  parameterLimit: 100000
}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/', express.static('public'));

process.env.TZ = 'Asia/Kolkata';

require('./router/admin.js')(app);
require('./router/app.js')(app);

module.exports = app;
