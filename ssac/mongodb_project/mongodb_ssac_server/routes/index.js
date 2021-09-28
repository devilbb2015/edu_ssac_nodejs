var express = require("express");
var router = express.Router();

const ssacRouter = require("./ssac/index");

router.use("/ssac", ssacRouter);

// // 회원가입
// router.post("/ssac/signup", async (req, res) => {
//   const { userId, name, password } = req.body;

//   const userModel = new users({
//     userId,
//     name,
//     password,
//   });

//   const result = await users.findOne({ userId: userId });
//   const result2 = await users.find();
//   if (userId === result.userId) {
//     return res.status(400).json({
//       message: "동일한 ID가 존재합니다.",
//     });
//   } else {
//     userModel
//       .save()
//       .then((savedUser) => {
//         console.log(savedUser);
//         res.status(200).json({
//           message: "생성 성공",
//         });
//       })
//       .catch((err) => {
//         console.log(savedUser);
//         res.status(500).json({
//           message: "DB 서버 에러",
//           error: err,
//         });
//       });
//   }
// });

// // 로그인
// router.post("/ssac/signin", async (req, res) => {
//   const { userId, password } = req.body;

//   try {
//     const result = await users.findOne({ userId: userId, password: password });
//     if (userId === result.userId && password === result.password) {
//       res.status(200).json({
//         message: "로그인 성공",
//         data: result,
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "로그인 실패",
//       error: err,
//     });
//   }
// });

// // 전체 게시물
// router.get("/ssac/board", async (req, res) => {
//   try {
//     const result = await boards.find();
//     if (!result)
//       return res.status(400).json({
//         message: "게시물이 없습니다.",
//         data: result,
//       });
//     res.status(200).json({
//       message: "조회 성공",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "조회 실패",
//       error: err,
//     });
//   }
// });

// // id 값의 게시물
// router.get("/ssac/board/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const result = await boards.findOne({ _id: id });
//     res.status(200).json({
//       message: "조회 성공",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "조회 실패",
//       error: err,
//     });
//   }

//   // 게시물 저장
//   router.post("/ssac/board", (req, res) => {
//     const { title, content, boardPw } = req.body;
//     const writeTime = new Date();
//     const boardModel = new boards({
//       title,
//       content,
//       boardPw,
//       writeTime,
//     });

//     boardModel
//       .save()
//       .then((savedBoard) => {
//         console.log(savedBoard);
//         res.status(200).json({
//           message: "생성 성공",
//         });
//       })
//       .catch((err) => {
//         console.log(savedBoard);
//         res.status(500).json({
//           message: "DB 서버 에러",
//         });
//       });
//   });

//   // 게시물 삭제
//   router.delete("/ssac/board/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//       await boards.findOneAndDelete(id);
//       res.status(200).json({
//         message: "삭제 성공",
//       });
//     } catch (err) {
//       res.status(500).json({
//         message: "삭제 실패",
//         error: err,
//       });
//     }
//   });
// });

module.exports = router;
