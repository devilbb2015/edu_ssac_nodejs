const con = require("../../modules/mysql");

const membershipController = {
    readAllMembership: (req, res, next) => {
        con.query(`SELECT * FROM membership`, (err, result, fields) => {
            if (err) {
                return res.status(400).json({
                    message: "조회 실패",
                });
            }
            res.status(200).json({
                message: "조회 성공",
                data: result,
            });
        });
    },

    detailMembership: (req, res, next) => {
        const { gender } = req.params;

        if (Number(gender) === 0 || Number(gender) === 1) {
            con.query(
                `SELECT * FROM membership WHERE gender = ?`,
                [Number(gender)],
                (err, result, fields) => {
                    if (err) {
                        return res.status(400).json({
                            message: "조회 실패",
                        });
                    }
                    res.status(200).json({
                        message: "조회 성공",
                        data: result,
                    });
                }
            );
        } else {
            res.status(401).json({
                message: "gender 값이 옳지 않습니다.",
            });
        }
    },
    uploadImage: (req, res, next) => {
        const img = req.file;
        if (img) {
            res.status(200).json({
                message: "이미지 업로드 완료",
                imgUrl: img.location,
            });
        } else {
            res.status(400).json({
                message: "이미지 업로드 실패",
            });
        }
    },

    uploadMembership: (req, res, next) => {
        const { gender, title, img } = req.body;
        con.query(
            `INSERT INTO membership (gender, title, img) VALUES (?, ?, ?)`,
            [Number(gender), title, img],
            (err, result, fields) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "에러가 발생했습니다.",
                    });
                }
                res.status(200).json({
                    message: "생성이 완료 되었습니다.",
                });
            }
        );
    },
};

module.exports = membershipController;
