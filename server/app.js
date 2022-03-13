const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const knex = require("knex");

//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

//app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, err => {
    if(err) throw err;
    console.log('connected to MongoDB')
});

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes middleware
// app.use('/api', authRoutes);
app.use('/api/auth', require('./routes/auth'))
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});

