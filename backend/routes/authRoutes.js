const router = require("express").Router();
const ctrl = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const User = require("../models/User");

/* Public Routes */
router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

/* Admin Only - View All Users */
router.get(
  "/users",
  auth,
  role("Admin"),
  async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

module.exports = router;

