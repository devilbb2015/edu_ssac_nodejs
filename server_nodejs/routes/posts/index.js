const express = require("express");
const router = express.Router();

const fruitArr = []; // DB역할

// Read 전체 데이터 조회 : GET
router.get("/", (req, res, next) => {
    res.json({
        data: fruitArr,
    });
});

// Create 데이터 생성
router.post("/", (req, res, next) => {
    const { fruit } = req.body;

    if (fruitArr.indexOf(fruit) === -1) {
        fruitArr.push(fruit);
        fruitArr.sort();

        console.log(fruitArr);
        res.json({
            message: "과일 추가가 완료 되었습니다.",
        });
    } else {
        res.status(500).json({
            message: "중복된 과일이 존재합니다.",
        });
    }
});

// Update 데이터 수정
router.put("/", (req, res, next) => {
    const { index, fruit } = req.body;

    if (index < 0 || index >= fruitArr.length) {
        res.status(500).json({
            message: "index out of bounds",
        });
    } else {
        fruitArr.splice(index, 1, fruit);
        console.log(fruitArr);
        res.json({
            message: "과일을 수정하였습니다.",
        });
    }
});

// Delete 데이터 삭제
router.delete("/", (req, res, next) => {
    const { fruit } = req.body;

    if (fruitArr.indexOf(fruit) == -1) {
        res.status(500).json({
            message: "삭제할 과일이 없습니다.",
        });
    } else {
        const index = fruitArr.indexOf(fruit);
        fruitArr.splice(index, 1);

        console.log(fruitArr);
        res.json({
            message: "과일이 삭제되었습니다.",
        });
    }
});

module.exports = router;
