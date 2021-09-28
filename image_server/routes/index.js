var express = require("express");
const imgUpload = require("../modules/imgUpload");
const upload = require("../modules/awsUpload");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.post("/images", upload.array("imgs"), (req, res, next) => {
    const file = req.file;
    console.log(file);

    res.json({
        message: "이미지 업로드 완료",
    });
});

module.exports = router;
