//router 가져오기
const routers = require("./routes")
const connect = require("./schemas/index.js");
connect();
const cors = require("cors")
// CORS(Cross-Origin Resource Sharing)란
// 자신이 속하지 않은 다른 도메인, 다른 프로토콜, 혹은 다른 포트에 있는 리소스를 요청하는 cross-origin HTTP 요청 방식
// https://surprisecomputer.tistory.com/32
const express = require('express');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static("static"))
app.use(express.urlencoded({extended: false}))
app.use(express.json());


// app.use(requestMiddleware);
app.use("/api", routers)


app.listen(port, () => {
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('*************** 현재 포트 : '+port+'***************')
  console.log('***************** ***************** *****************')
});