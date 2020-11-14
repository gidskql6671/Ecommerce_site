const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

dotenv.config();
app.use(cors());

const port = process.env.SERVER_PORT || 3001;
let url = process.env.MONGO_URL;

// Template Engine 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// body-parser 설정
app.use(bodyParser.json());

// DB 연결 
// require('./models/userSchema');

// mongoose.connect(url,
// 				{useNewUrlParser : true,
// 				useUnifiedTopology: true});
// let db = mongoose.connection;

// db.on('error', function(err){
// 	console.log(`DB Error : ${err}`);
// })
// db.on('open', function(){
// 	console.log('DB Open');
// })

// 라우터 연결
const api  = require( './routes/index');

app.use('/api', api);

// 서버 실행
let server = app.listen(port, function(){
	console.log(`Server has started on port ${port}`);
})

