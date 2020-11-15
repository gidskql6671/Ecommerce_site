const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.post('/read', function(req, res){
	let { username } = req.body;
	
	User.findOne({'name': username})
	.then((data)=> {
		if (!data){
			let user = new User();
			
			user.name = username;
			user.score = 0;
			
			user.save()
			.then(()=>{
				res.json({username: username, number:0, login: true});
			})
			.catch((e)=>console.log(e));
		}
		else{
			console.log(`${data} 송신 완료`);
			res.json({username: username, number: data.score, login: true});
		}
	})
	.catch(e => {console.log(e)});
});

router.post('/write', function(req, res){
	
	let {username, number} = req.body;
	
    console.log(req.body);
	
	User.findOneAndUpdate({name:username}, { score: number }, {new:true})
	.then(data => console.log(data));
});

module.exports = router;