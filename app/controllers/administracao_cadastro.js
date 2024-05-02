let connection = require('../../config/database.js');
let pontos = require('../models/models.js')(connection);

module.exports.vias = function (req, res) {
	if (req.session.autenticar) {
		res.render('administrador/cadastrar_via', { titulo: 'Transporte público de Dourados-MS', msg: [], user: req.session.user });
	} else {
		res.redirect('/login');
	}
}

module.exports.salvar_via = function (req, res) {
	req.assert('nome_sentidovia', 'Por favor, informe  nome da via !! ').notEmpty();
	var erros = req.validationErrors();

	if (erros) {
		res.render('administrador/cadastrar_via', { titulo: 'Transporte público de Dourados-MS', msg: erros, user: req.session.user });
		return;
	}

	pontos.insert_via(req.body, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			res.redirect('/reclamacoes/todos');
		}
	});
}

module.exports.salvar_horario_classificacao = function (req, res) {

	req.assert('nome_classifcação', 'Por favor, informe nome para classificação !! ').notEmpty();
	var erros = req.validationErrors();

	if (erros) {
		res.render('administrador/cadastrar_via', { titulo: 'Transporte público de Dourados-MS', msg: erros, user: req.session.user });
		return;
	}

	pontos.insert_classificação(req.body, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			res.redirect('/reclamacoes/todos');
		}
	});
}

module.exports.cadastros_horario = function (req, res) {
	if (req.session.autenticar) {
		pontos.classificacao_horario(function (error, result3) {
			pontos.horario(function (error, result2) {
				pontos.bairros(function (error, result) {
					pontos.vias(function (error, results) {
						res.render('administrador/cadastrar_horario', {
							titulo: 'Transporte público de Dourados-MS',
							msg: [],
							user: req.session.user,
							vias: results,
							bairros: result,
							horario: result2,
							classificação: result3
						});
					});
				});
			});
		});
	} else {
		res.redirect('/login');
	}
}

module.exports.cadastros_horario_salvar = function (req, res) {
	req.assert('horario_time', 'Por favor, informe um horário !! ').notEmpty();
	req.assert('percurso_viagem', 'Por favor, informe percurso de inicio !! ').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		pontos.classificacao_horario(function (error, result3) {
			pontos.horario(function (error, result2) {
				pontos.bairros(function (error, result) {
					pontos.vias(function (error, results) {
						res.render('administrador/cadastrar_horario', {
							titulo: 'Transporte público de Dourados-MS',
							msg: erros,
							user: req.session.user,
							vias: results,
							bairros: result,
							horario: result2,
							classificação: result3
						});
					});
				});
			});
		});
		return;
	}
	pontos.insert_horario(req.body, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			pontos.classificacao_horario(function (error, result3) {
				pontos.horario(function (error, result2) {
					pontos.bairros(function (error, result) {
						pontos.vias(function (error, results) {
							res.render('administrador/cadastrar_horario', {
								titulo: 'Transporte público de Dourados-MS',
								msg: [{ msg: 'Horário salvo com sucesso !!' }],
								user: req.session.user,
								vias: results,
								bairros: result,
								horario: result2,
								classificação: result3
							});
						});
					});
				});
			});
		};
	});
}

module.exports.classificacao_horario = function (req, res) {
	pontos.insert_classificacao_horario(req.body, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			pontos.classificacao_horario(function (error, result3) {
				pontos.horario(function (error, result2) {
					pontos.bairros(function (error, result) {
						pontos.vias(function (error, results) {
							res.render('administrador/cadastrar_horario', {
								titulo: 'Transporte público de Dourados-MS',
								msg: [{ msg: 'Classificação salva com sucesso !!' }],
								user: req.session.user,
								vias: results,
								bairros: result,
								horario: result2,
								classificação: result3
							});
						});
					});
				});
			});
		}
	});
}