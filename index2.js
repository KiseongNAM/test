var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', function(req, res) {
  res.render('index2');
}); // 루트 페이지에 index2.ejs 파일을 render 시키겠다!

app.get('/create', function(req, res) {
    console.log(req.query)
    res.send('get 연습 중임');
}); // 내가 입력으로 넣는 값에 의해 그 주소창으로 이동하는 것을 볼 수 있을 것임.

app.post('/create', function(req, res) {
    console.log(req.body)
    res.send('post 연습 중임');
}); 
  


app.listen(3000);
console.log('Server is listening on port 3000');