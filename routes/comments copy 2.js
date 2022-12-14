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

//POST 댓글 작성 완성
router.post("/:postsId", async (req, res) => {
  
  const { postsId } = req.params;
  const {nickname, content} = req.body
  const post = await Posts.findById (postsId)
  const date = new Date()
  const commentid = date.valueOf();
  console.log(post)
  try {
        post.comments.push({
        nickname, 
        content, 
        commentid,
        createdAt: new Date()
    });
      const result = await post.save();
      console.log(result)
      return res.status(200).send({message: "댓글 작성 성공!"});
    } catch (err){
      console.log(err) 
      if(!content || !nickname){
        return res.status(400).json({success: false, errorMessage:"내용이나 작성자가 입력되지 않았습니다. 다시한번 확인해주세요."});
      }
    }
});


// Comment 수정
router.patch("/:commentId", async (req, res) => {
  const {commentId} = req.params;
  console.log(Posts);
  const {content} = req.body    //코멘트 아이디
      console.log(commentId);
      await Posts.updateOne(
      { _id : commentId},
      { $set: {"comments.content": content} });
      return res.status(200).send({});
  
      // return res.status(400).send({});

});


// Comment 삭제
router.delete("/:postsId/:commentId", async (req, res) => {
  const {postsId,commentId} = req.params;
  const {content} = req.body    //코멘트 아이디

  Posts.findOneAndUpdate(
      { postsId : Number(postsId)},
      {   $pull: {comments: {commentid: commentId}}},
      { new: true},
      function(err) {
          if(err) {console.log(err)}
      }
  )
});



module.exports = router;