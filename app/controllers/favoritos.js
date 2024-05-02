let connection = require('../../config/database.js');
let pontos = require('../models/models.js')(connection);

module.exports.salvar = function (req, res) {

	let dados = null;
	let date = new Date();

	pontos.new_favoritos(dados = {
		'data_salvo': date.toLocaleDateString() + ' às ' + date.toLocaleTimeString(),
		'id_usuario': req.params.id_usuario,
		'id_bairro': req.params.id_bairro
	}, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			res.redirect('/favoritos');
		}
	});
}

module.exports.favoritos = function (req, res) {
	if (req.session.autenticar) {
		pontos.favoritos(req.session.user[0].id_usuario, function (error, result) {
			if (result.length > 0) {
				res.render('usuario/favoritos',
					{
						favoritos: result, titulo: 'Transporte público de Dourados-MS',
						user: req.session.user,
						msg: []
					});
			} else {
				res.render('usuario/favoritos',
					{
						favoritos: result, titulo: 'Transporte público de Dourados-MS',
						user: req.session.user,
						msg: [{ msg: 'Até o momento não foi salvo nenhuma linha.' }]
					});
			}
		})
	} else {
		res.redirect('/login');
	}
}