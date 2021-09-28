var express = require("express");
const boardController = require("../../../controllers/ssac/boardController.js");
const authModule = require("../../../modules/authModule.js");
var router = express.Router();

router.post("/", authModule.loggedIn, boardController.createBoard);
router.get("/", boardController.readAllBoard);
router.get("/:id", boardController.readDetailBoard);
router.delete("/:id", authModule.loggedIn, boardController.deleteBoard);
router.put("/:id", authModule.loggedIn, boardController.updateBoard);

module.exports = router;
