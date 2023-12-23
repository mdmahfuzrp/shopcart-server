const mongoose = require('mongoose');

// Product schema
const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
