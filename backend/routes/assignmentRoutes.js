const router = require("express").Router();
const ctrl = require("../controllers/assignmentController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, ctrl.assignAsset);

module.exports = router;