const board = require("../../models/board");

const boardController = {
  createBoard: async (req, res) => {
    const { title, content, boardPw, writer } = req.body;

    const boardModel = new board({
      title,
      content,
      boardPw,
      writeTime: new Date(),
      writer,
    });

    try {
      const result = await boardModel.save();
      res.status(200).json({
        message: "생성 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  readAllBoard: async (req, res) => {
    try {
      const result = await board.find();
      if (!result)
        return res.status(400).json({
          message: "게시물이 없습니다.",
          data: result,
        });
      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        message: "DB 서버 에러",
        error: err,
      });
    }
  },
  readDetailBoard: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await board.findById(id);
      if (!result)
        return res.status(400).json({ message: "데이터가 없습니다." });

      res.status(200).json({
        message: "조회 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  deleteBoard: async (req, res) => {
    const { id } = req.params;

    try {
      await boards.findOneAndDelete(id);
      res.status(200).json({
        message: "삭제 성공",
      });
    } catch (err) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  updateBoard: async (req, res) => {
    const { id } = req.params;
    const { title, content, boardPw, writer } = req.body;

    try {
      const result = await board.findByIdAndUpdate(
        id,
        {
          title,
          content,
          boardPw,
          writer,
        },
        { new: true }
      );
      res.status(200).json({
        message: "수정 성공",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
};

module.exports = boardController;
