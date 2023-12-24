const router = require("express").Router();
const CartItem = require('../models/CartItem');

router.delete('/:cartItemId', async (req, res) => {
  const cartItemId = req.params.cartItemId;
    console.log('cart item id', cartItemId);

  try {
    const removedItem = await CartItem.findOneAndDelete(cartItemId);
    console.log(removedItem);

    if (!removedItem) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }

    res.status(200).json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item from cart' });
  }
});

module.exports = router;
