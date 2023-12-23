require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Get
app.get('/', (req, res) => {
  res.send('Running Server');
});

// LISTENING
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
