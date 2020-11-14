const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
	res.json( {title: "Ecommerce Site",
			  username: "asads"} );
	});

module.exports = router;