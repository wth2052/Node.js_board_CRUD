// /routes/comments.js
const express = require("express")
const router = express.Router()
const Posts = require("../schemas/posts")
//GET 댓글 조회 완성
router.get("/:postsId", async (req, res) => {
  const { postsId } = req.params;
  const getAllComments = await Posts.find({ postsId: Number(postsId)});
  res.json({ getAllComments })
})

//POST 댓글 작성 진행중
router.post("/:postsId", async (req, res) => {
  
  const { postsId } = req.params;
  const {nickname, content} = req.body
  const post = await Posts.findById (postsId)
  const date = new Date()
  const commentid = date.valueOf();
  console.log(post)
  res.json(post)
  try {
        post.comments.create({
        nickname, content, commentid
    });
      await post.save();
      return res.status(200).send({message: "댓글 작성 성공!"});
    } catch (err){
      console.log(err) 
      if(!content || !nickname){
        return res.status(400).json({success: false, errorMessage:"내용이나 작성자가 입력되지 않았습니다. 다시한번 확인해주세요."});
      }
    }

});

module.exports = router;