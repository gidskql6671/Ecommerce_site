const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

let port = process.env.PORT || 3000;
let url = process.env.MONGO_URL;

// Template Engine 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// DB 연결 
require('./models/userSchema');

mongoose.connect(url,
				{useNewUrlParser : true,
				useUnifiedTopology: true});
let db = mongoose.connection;

db.on('error', function(err){
	console.log(`DB Error : ${err}`);
})
db.on('open', function(){
	console.log('DB Open');
})

// 라우터 연결
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 서버 실행
let server = app.listen(port, function(){
	console.log(`Server has started on port ${port}`);
})

