let connection = require('../../config/connect_banco.js');
let pontos = require('../models/models.js')(connection);

module.exports.bairros = function (req, res) {
	pontos.bairros(function (error, result) {
		if (req.session.autenticar) {
			res.render('usuario/bairros', { titulo: 'Transporte público de Dourados-MS', titulo_1: 'Bairros de  Dourados-MS', bairros: result, user: req.session.user });
		} else {
			res.redirect('/');
		}
	})
}