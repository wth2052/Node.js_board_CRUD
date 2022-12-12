// node_modules의 express 패키지를 가져온다.
var express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)





// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
//환경변수에서 port를 가져온다. 환경변수가 없을시 3000포트를 지정한다.
const portnumber = Number(3000)
var port = app.listen(process.env.PORT || portnumber);

app.listen(port, () => {
    console.log(`Express, server start at ${portnumber}`);
})