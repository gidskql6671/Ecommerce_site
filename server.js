const express = require('express');
const app = express();
let router = require('./routes/index')(app);

let port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

let server = app.listen(port, function(){
	console.log(`Server has started on port ${port}`);
})

