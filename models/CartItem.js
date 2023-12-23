const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
  colors: [String],
  badge: String,
  des: String,
  sizes: [String],
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;