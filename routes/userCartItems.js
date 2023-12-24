const router = require("express").Router();
const CartItem = require('../models/CartItem');

// Route to fetch cart items for a specific user
router.get('/:userId/cart-items', async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);

  try {
    // Find cart items for the specified user ID
    const cartItems = await CartItem.find({ user: userId });

    if (!cartItems) {
      return res.status(404).json({ message: 'Cart items not found for this user' });
    }

    res.status(200).json({ cartItems });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cart items' });
  }
});

module.exports = router;