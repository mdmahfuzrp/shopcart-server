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
const removeAllCartItems = require('./routes/removeAllCartItems');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
// Register
app.use('/api/users', userRoutes);
// Login route
app.use('/api/auth', authRoutes);
// Get all product route
app.use('/api/products', allProducts);
// Add new item in user cart collection route
app.use('/api/add-to-cart', addToCart);
// All cart items for specific user route
app.use('/api/user', userCartItems);
// Delete single cart item route
app.use('/api/cart', removeCartItem);
// Reset all item for specific user route
app.use('/api/cart', removeAllCartItems)

// Get
app.get('/', (req, res) => {
  res.send('Running Server');
});

// LISTENING
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
