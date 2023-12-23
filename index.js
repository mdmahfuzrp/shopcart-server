require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connection = require('./db');

// database connection
connection();


// middlewares
app.use(express.json())
app.use(cors());


// LISTENING
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})