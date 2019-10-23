const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
})

app.get('/posts', (req, res) => {
  res.send('We are on posts');
})

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => 
  console.log('Connected to DB!')
);

//Start server
app.listen(3000);