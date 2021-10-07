var express = require("express");
const authController = require("../../../controllers/ssac/authController.js");
const authModule = require("../../../modules/authModule.js");
var router = express.Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);

router.get("/profile", authModule.loggedIn, authController.getProfile);

module.exports = router;
