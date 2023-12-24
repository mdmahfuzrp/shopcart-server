const router = require("express").Router();
const CartItem = require("../models/CartItem");

router.delete("/:userId", async (req, res) => {
    const userId = req.params.userId;
    console.log("Received userId:", userId); // Log to verify received userId
  
    try {
      const response = await CartItem.deleteMany({ userId });
      console.log(response);
  
      res.status(200).json({ message: "All items reset from cart" });
    } catch (error) {
      console.error("Error resetting cart items:", error);
      res.status(500).json({ message: "Failed to reset items from cart" });
    }
  });
  

module.exports = router;