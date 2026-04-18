const router = require("express").Router();
const ctrl = require("../controllers/assetController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, ctrl.getAssets);
router.post("/", auth, ctrl.addAsset);

module.exports = router;