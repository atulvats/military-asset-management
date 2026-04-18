const router = require("express").Router();
const ctrl = require("../controllers/transferController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, ctrl.transferAsset);

module.exports = router;