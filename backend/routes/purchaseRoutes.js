const router = require("express").Router();
const ctrl = require("../controllers/purchaseController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, ctrl.createPurchase);

module.exports = router;