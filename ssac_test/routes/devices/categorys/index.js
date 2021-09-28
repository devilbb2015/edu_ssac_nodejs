var express = require("express");
var router = express.Router();

const categoryArr = [];

router.post("/", (req, res, next) => {
    const { catogoryName, categoryDescription } = req.body;

    const categoryIdx = categoryArr.findIndex((item, index) => {
        return item.categoryName === catogoryName;
    });

    if (categoryIdx === -1) {
        categoryArr.push({
            catogoryName: catogoryName,
            categoryDescription: categoryDescription,
        });
        console.log(categoryArr);
        res.json({
            messeage: "카테고리 생성 완료",
            data: categoryArr[categoryArr.length - 1],
        });
    } else {
        res.status(400).json({
            messeage: "중복된 카테고리 존재",
        });
    }
});

router.get("/", (req, res, next) => {
    if (categoryArr.length === 0) {
        res.status(401).json({
            messeage: "카테고리가 존재하지 않습니다.",
        });
    } else {
        res.json({
            messeage: "카테고리 조회 완료",
            data: categoryArr,
        });
    }
});

module.exports = router;
