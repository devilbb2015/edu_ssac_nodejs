var express = require("express");
const elasticController = require("../../../controllers/elasticController");
var router = express.Router();

router.get("/", elasticController.search);

module.exports = router;
