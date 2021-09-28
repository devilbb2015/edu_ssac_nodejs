var express = require("express");
var router = express.Router();

const membershipRouter = require("./membership/index");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.use("/membership", membershipRouter);

module.exports = router;
