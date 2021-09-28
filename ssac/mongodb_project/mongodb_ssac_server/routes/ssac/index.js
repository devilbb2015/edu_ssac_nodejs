var express = require("express");
const authController = require("../../controllers/ssac/authController.js");
const boardController = require("../../controllers/ssac/boardController.js");
var router = express.Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);

router.post("/board", boardController.createBoard);
router.get("/board", boardController.readAllBoard);
router.get("/board/:id", boardController.readDetailBoard);
router.delete("/board/:id", boardController.deleteBoard);
router.put("/board/:id", boardController.updateBoard);

module.exports = router;
