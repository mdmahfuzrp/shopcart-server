require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const allProducts = require('./routes/allProduct');
const addToCart = require('./routes/addToCart');
const userCartItems = require('./routes/userCartItems');
const removeCartItem = require('./routes/removeCarItem');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', allProducts);
app.use('/api/add-to-cart', addToCart);
// All cart items for specific user
app.use('/api/user', userCartItems);
// Delete single cart item route
app.use('/api/cart', removeCartItem);

// Get
app.get('/', (req, res) => {
  res.send('Running Server');
});

// LISTENING
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
