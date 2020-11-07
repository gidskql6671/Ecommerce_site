const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	user_id: {type: String, require: true, unique: true, lowercase: true, trim: true},
	password: {type: String, required: true, trim:true},
	email: String,
	name: String,
	id: mongoose.Schema.Types.ObjectID
});
// 스키마에 복합 인덱스 적용. 
userSchema.index({user_id: 1, name: 1});

// 스키마 등록
module.exports = mongoose.model('User', userSchema);