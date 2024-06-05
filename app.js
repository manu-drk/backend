const express = require('express');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const app = express();

const mongoose = require('mongoose');

const uri = 'mongodb+srv://Toto:Toto123@cluster0.ngx6t0t.mongodb.net/test';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log('Connected to MongoDB!'))
.catch((error) => {
  console.error('Connection to MongoDB failed!', error);
});
  
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;