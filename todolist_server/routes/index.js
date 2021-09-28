var express = require("express");
const con = require("../modules/mysql");
var router = express.Router();

const todoListsRouter = require("./todolists/index");

router.get("/", (req, res, next) => {
    res.json({
        message: "접속 완료~!!!",
    });
});

router.use("/todolists", todoListsRouter);

module.exports = router;
