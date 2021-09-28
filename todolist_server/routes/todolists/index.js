var express = require("express");
var router = express.Router();

const con = require("../../modules/mysql");

let todoListArr = [];

// 투두 리스트 생성
// method : POST
// url : /todolists
// body : { id : 0, todoContent : '내일 할일'}

// response
// 200
// { message : '생성이 완료 되었습니다', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}

// 400
// {message : '생성에 실패했습니다.'}

router.post("/", (req, res, next) => {
    const { todoContent } = req.body;

    con.query(
        `INSERT INTO ssac_todolist (todoContent, checked) VAlUES (?, ?)`,
        [todoContent, 0],
        (err, result, fields) => {
            if (err) {
                return res.status(400).json({
                    message: "생성 실패",
                });
            }

            res.status(200).json({
                message: "생성 완료",
            });
        }
    );
});

// 투두 리스트 삭제 (id)
// method : delete
// url : /todolists/:id
// params : {id : 0}

// response
// 200
// {message : '삭제가 완료 되었습니다.', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}
// 400
// {message : '삭제에 실패 했습니다'}

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;

    con.query(
        `DELETE FROM ssac_todolist WHERE id = ?`,
        [Number(id)],
        (err, result, fields) => {
            if (err) {
                return res.status(400).json({
                    message: "삭제 실패",
                });
            }

            res.status(200).json({
                message: "삭제 완료",
            });
        }
    );
});

// 투두 리스트 전체 조회
// method : GET
// url : /todolists

// response
// 200
// {message : '조회가 완료 되었습니다', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}
// 400
// {message : '조회에 실패 했습니다'}

router.get("/", (req, res, next) => {
    // 전체 데이터 조회
    con.query(`SELECT * FROM ssac_todolist`, (err, result, fields) => {
        if (err) {
            return res.status(400).json({
                message: "조회 실패",
            });
        }

        res.json({
            message: "조회 성공",
            data: result,
        });
    });
});

// 투두 리스트 수정 (id)
// method : PUT
// url : /todolists/:id
// body :  { todoContent : "모레할 일"}
// params : {id : 0}

// 200
// {message : '수정 완료', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}
// 400
// {message : '수정에 실패 했습니다'}

router.put("/:id", (req, res, next) => {
    const { id } = req.params;
    const { todoContent, checked } = req.body;

    con.query(
        `UPDATE ssac_todolist SET todoContent = ?, checked = ? WHERE id = ?`,
        [todoContent, checked, id],
        (err, result, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    message: "수정 실패",
                });
            }
            res.status(200).json({
                message: "수정 완료",
            });
        }
    );
});

module.exports = router;
