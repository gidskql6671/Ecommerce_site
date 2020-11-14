const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    console.log(`http://localhost:${port}/api/`);
		res.send( {title: "Ecommerce Site"} );
	});

module.exports = router;