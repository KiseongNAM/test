var express = require('express');
var app = express();

// set the view engine to ejs
// 새로 생긴 부분, "ejs라는 파일"을 응답에 실어 보내겠다!
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
// 저번 시간에 배운 res.send (or res.json)가 res.render로!
// index1라고 하는 파일(.ejs)을 response로, render함으로써 내보내겠다!
app.get('/', function(req, res) {
  res.render('index1');
});

app.get('/hi', function(req, res) {
  res.render('index1',{
    test1 : "서버에서 전송하는 첫번째 test",
    test2 : "서버에서 전송하는 두번째 test"
  });
});

app.listen(3000);
console.log('Server is listening on port 3000');