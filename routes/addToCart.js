const router = require("express").Router();
const { User } = require("../models/user");
const CartItem = require('../models/CartItem');

router.post('/', async (req, res) => {
  const { useremail, img, productName, price, colors, badge, des, sizes } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email: useremail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the product already exists in the user's cart
    const existingCartItem = await CartItem.findOne({
      user: user._id,
      productName, // Assuming productName is unique to identify the product
      // Add additional fields as necessary to uniquely identify a product
    });

    if (existingCartItem) {
      return res.status(400).json({ message: 'Product already exists in the cart' });
    }

    // Create a new cart item
    const cartItem = new CartItem({
      user: user._id,
      img,
      productName,
      price,
      colors,
      badge,
      des,
      sizes,
    });

    // Save the new cart item
    await cartItem.save();

    res.status(200).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
});

module.exports = router;
