const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        title: "test",
    });
});

router.get("/main", (req, res, next) => {
    res.json({
        title: "test main",
    });
});

module.exports = router;
