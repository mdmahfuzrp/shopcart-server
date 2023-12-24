const router = require("express").Router();
const CartItem = require("../models/CartItem");

router.delete("/:cartItemId", async (req, res) => {
  const cartItemId = req.params.cartItemId;
  console.log("cart item id", cartItemId);

  try {
    await CartItem.deleteMany({ cartItemId });

    res.status(200).json({ message: "All item reset from cart" });
  } catch (error) {
    res.status(500).json({ message: "Failed to rest item from cart" });
  }
});

module.exports = router;
