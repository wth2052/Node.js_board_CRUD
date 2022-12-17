# Node.js_board_CRUD
# api 호출 경로
zardfanpage.shop/api/posts  
zardfanpage.shop/api/comments


zardfanpage.shop/api/comments/postsId  
zardfanpage.shop/api/comments/postsId/commentsId


postsId = 1, 2, 3, 4 ...  
commentsId = 639b4faefd552ab36b4511b7 ... 
 
 
 
 
 스키마 구조
 게시글  
 {  
 _id  
 user  
 password  
 title  
 content  
 createdAt  
 updatedAt  
 postsId  
 __v  
 　　comments {  
 　　nickname  
   　content  
    password  
　　commentId  
　　createdAt  
　　_id  
  　　}  
 }  
