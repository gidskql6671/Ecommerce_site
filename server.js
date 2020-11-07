const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
let router = require('./routes/index')(app);

dotenv.config();

let port = process.env.PORT || 3000;
let url = process.env.MONGO_URL;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

let server = app.listen(port, function(){
	console.log(`Server has started on port ${port}`);
})

mongoose.connect(url,
				{useNewUrlParser : true,
				useUnifiedTopology: true});
db = mongoose.connection;

db.on('error', function(err){
	console.log(`DB Error : ${err}`);
})
db.on('open', function(){
	console.log('DB Open');
})