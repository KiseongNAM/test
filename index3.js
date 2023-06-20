var express = require('express');
var app = express();


let comments = []; // 빈 db... 껐다 켜면 사라지죠?

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('index3', {comments : comments});
}); // 루트 페이지에 index3.ejs 파일을 render 시키겠다!

app.post('/create', function(req, res) {
    // 여기에다가! 코드 작성 //
    // console.log(req.body)
    const { content } = req.body //python의 append와 같음
    comments.push(content)
    // console.log(comments)
    res.redirect('/') //모든 과정이 끝나고 나서 다시 루트 경로로 이동
}); 
  

app.listen(3000);
console.log('Server is listening on port 3000');