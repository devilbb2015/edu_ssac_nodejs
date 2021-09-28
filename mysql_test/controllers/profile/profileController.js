const con = require("../../modules/mysql");

const profileController = {
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
  readAllProfile: (req, res, next) => {
    con.query(`SELECT * FROM profile`, (err, result, fields) => {
      if (err) {
        return res.status(500).json({
          message: "서버 에러",
        });
      }
      if (result) {
        res.status(200).json({
          message: "조회 성공",
          data: result,
        });
      } else {
        res.status(400).json({
          message: "전체 프로필 조회 실패",
        });
      }
    });
  },
  uploadProfile: (req, res, next) => {
    const { name, profileUrl } = req.body;
    const now = new Date();
    con.query(
      `INSERT INTO profile (name, profileUrl, createdDate) VALUES (?, ?, ?)`, // sql
      [name, profileUrl, now], // params
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

module.exports = profileController;
