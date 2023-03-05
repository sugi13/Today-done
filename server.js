const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routes = require('./routes/router');

app.set("view engine", "ejs");

app.use(express.static("public"));

// initializing MONGODB //
const URL = 'mongodb+srv://sukant:sukant13@cluster0.rpnpehh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URL)
.then((res) =>{
  console.log("Database connected!");
})
.catch((err) =>{
  console.log(err);
})

// routes //
app.use(routes);

// PORT listening //
app.listen("3000");


/* Done.Date */