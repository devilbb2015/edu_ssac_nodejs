const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  boardPw: { type: String, required: true },
  writeTime: { type: Date, default: new Date(), required: true },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

// this => model or schema
boardSchema.statics.checkAuth = async function (params) {
  const { boardId, writerId } = params;
  try {
    const ownResult = await this.findOne({ _id: boardId }); // 게시물의 _id
    const ownId = ownResult.writer;
    if (ownId.toString() !== writerId.toString()) {
      return -1;
    }
    return 1;
    // 비교하고자 하는 유저의 _id
    //return res.status(409).json({ message: "접근 권한이 없습니다." });
  } catch (error) {
    console.log(error);
    return -2;
    // res.status(500).json({
    //   message: "DB 서버 에러",
    // });
  }
};

// this => document or data instance
boardSchema.methods.checkMe = function () {};

module.exports = mongoose.model("board", boardSchema);
