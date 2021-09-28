var express = require("express");
const user = require("../models/user");
var router = express.Router();

const users = require("../models/user");

// Create

router.post("/auth", (req, res) => {
  const { name, age, gender, likes } = req.body;

  const userModel = new users({
    name,
    age,
    gender,
    likes,
  });
  // userModel.name = name;
  // userModel.age = age;
  // userModel.gender = gender;
  // userModel.likes = likes;

  userModel
    .save()
    .then((savedUser) => {
      console.log(savedUser);
      res.status(200).json({
        message: "생성 성공",
      });
    })
    .catch((err) => {
      console.log(savedUser);
      res.status(500).json({
        message: "DB 서버 에러",
      });
    });
});

// Read All
router.get("/auth", async (req, res) => {
  try {
    const result = await users.find();
    if (!result) return res.status(400).json({ message: "값이 없습니다." });
    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "조회 실패",
      error: error,
    });
  }
});

// Read Detail
router.get("/auth/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await users.findOne({ _id: id });
    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "조회 실패",
      error: error,
    });
  }
});

// Update
router.put("/auth/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, likes } = req.body;
  try {
    const result = await users.findByIdAndUpdate(
      id,
      {
        name,
        age,
        gender,
        likes,
      },
      // 수정한 후의 값을 반환하려면 true 수정하기 전의 값을 반환하려면 false
      { new: true }
    );
    res.status(200).json({
      message: "수정 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "조회 실패",
      error: error,
    });
  }
});

// Delete
router.delete("/auth/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await users.findOneAndDelete(id);
    res.status(200).json({
      message: "삭제 성공",
    });
  } catch (error) {
    res.status(500).json({
      message: "삭제 실패",
      error: error,
    });
  }
});

module.exports = router;
