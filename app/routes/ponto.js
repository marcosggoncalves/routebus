const controllers = require('./../controllers/ponto.js');
const router = require('express').Router();

router.get('/:id', function (req, res) {
	controllers.pontos(req, res);
})

module.exports = router;
	
