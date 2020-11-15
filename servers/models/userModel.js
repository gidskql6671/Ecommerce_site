const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {type: String, require: true, index: true, unique: true},
	score: {type: Number, require: true, default: 0},
	id: mongoose.Schema.Types.ObjectID
});

// 스키마 등록
module.exports = mongoose.model('User', userSchema);