var express = require('express');
var app = express();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

const Comments = sequelize.define('Comments', {
  content: {
    type: DataTypes.STRING,
    allowNull: false //공란인 입력도 받아들일것이냐? (* 붙어 있는 필수 입력칸 등에 사용)
  },

}, {
  // Other model options go here
});

(async() => {
await Comments.sync();
})();

// req.body 오는 값을 읽기 위해 적용
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// <%= %> 또는 <% %> 같이 html에서 js를 쓰기위한 ejs 라이브러리
app.set('view engine', 'ejs');

// index page
app.get('/', async function(req, res) {
    const comments = await Comments.findAll();
    res.render('index', { comments: comments });
});

app.post('/create', async function(req, res) {
    console.log(req.body)
    const {content} = req.body //form태그에 있는 name="content"
    await Comments.create({ content : content });
    res.redirect('/')
});

app.post('/update/:id', async function(req, res) {
    const {content} = req.body
    const {id} = req.params
    await Comments.update({ content: content }, {
    where: {
      id: id
    }
  });

    res.redirect('/')
});

app.post('/delete/:id', async function(req, res) {
    const {id} = req.params
    await Commnets.destroy({
    where: {
      id: id
    }
  });
    res.redirect('/')
});

app.listen(3000);
console.log('Server is listening on port 3000');