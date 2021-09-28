var express = require("express");
var router = express.Router();

const categorysRouter = require("./categorys/index");
router.use("/categorys", categorysRouter);

const devicesArr = [];

router.post("/", (req, res, next) => {
    const { name, version, price } = req.body;

    const deviceIdx = devicesArr.findIndex((item, index) => {
        return item.name === name;
    });

    if (deviceIdx === -1) {
        devicesArr.push({ name: name, version: version, price: price });
        console.log(devicesArr);
        res.json({
            messeage: "기기 정보 추가가 완료 되었습니다.",
        });
    } else {
        res.status(400).json({
            messeage: "중복된 기기가 존재합니다.",
        });
    }
});

router.get("/:idx", (req, res, next) => {
    const { idx } = req.params;

    if (idx < 0 || idx >= devicesArr.length) {
        res.status(400).json({
            messeage: "인덱스 범위를 벗어났습니다.",
        });
    }

    if (devicesArr[idx]) {
        res.json({
            messeage: "기기 정보 조회 완료",
            data: devicesArr[idx],
        });
    } else {
        res.status(401).json({
            messeage: "기기 정보가 존재하지 않습니다.",
        });
    }
});

router.put("/:idx", (req, res, next) => {
    const { idx } = req.params;
    const { name, version, price } = req.body;

    if (idx < 0 || idx >= devicesArr.length) {
        res.status(400).json({
            messeage: "인덱스 범위를 벗어났습니다.",
        });
    }

    if (devicesArr[idx]) {
        devicesArr.splice(idx, 1, {
            name: name,
            version: version,
            price: price,
        });
        res.json({
            messeage: "기기 정보 수정이 완료 되었습니다.",
            data: devicesArr[idx],
        });
    } else {
        res.status(400).json({
            messeage: "기기 정보가 존재하지 않습니다.",
        });
    }
});

router.delete("/:idx", (req, res, next) => {
    const { idx } = req.params;

    if (idx < 0 || idx >= devicesArr.length) {
        res.status(400).json({
            messeage: "인덱스 범위를 벗어났습니다.",
        });
    }

    if (devicesArr[idx]) {
        devicesArr.splice(idx, 1);
        res.json({
            messeage: "기기 삭제가 완료 되었습니다.",
        });
    } else {
        res.status(400).json({
            messeage: "기기 정보가 존재하지 않습니다.",
        });
    }
});

module.exports = router;
