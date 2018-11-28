var express = require('express');
var router = express.Router();
router.get('/',(req, res, next) => {
	res.render('page/register',{ title: '注册' });
})

module.exports = router;