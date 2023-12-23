const router = require("express").Router();
const Product = require('../models/products');

// Assuming this is within a route handler or a function
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

module.exports = router;