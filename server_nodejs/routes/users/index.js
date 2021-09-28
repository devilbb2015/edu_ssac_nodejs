const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({
        username: "lee",
    });
});

router.post("/", (req, res, next) => {
    console.log(req.body);

    const { username, age, address, sns } = req.body;

    res.json({
        content: "유저 생성 완료",
        profile: `내 이름은 ${username}이고, 나이는 ${age}이고, 사는 곳은 ${address}이고, sns는 ${sns}주로 사용해`,
    });
});

router.delete("/:username", (req, res, next) => {
    const { username } = req.params;

    console.log(username);

    res.json({
        content: "유저 삭제 완료",
    });
});

module.exports = router;
