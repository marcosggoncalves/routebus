const controllers = require('./../controllers/bairros.js');
const router = require('express').Router();

router.get('/', function (req, res) {
	controllers.bairros(req, res);
});

module.exports = router;