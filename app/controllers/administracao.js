let connection = require('../../config/database.js');
let pontos = require('../models/models.js')(connection);

module.exports.bairros = function (req, res) {
	pontos.bairros(function (error, result) {
		if (req.session.autenticar) {
			res.render('administrador/bairros', { titulo: 'Transporte público de Dourados-MS', titulo_1: 'Bairros de  Dourados-MS', bairros: result, user: req.session.user });
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.horario_bairros = function (req, res) {
	pontos.horarios_bairro(req.params.id_bairro, function (error, result) {
		if (req.session.autenticar) {
			res.render('administrador/horarios', {
				titulo: 'Transporte público de Dourados-MS ',
				user: req.session.user,
				horarios: result
			});
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.linhas = function (req, res) {
	pontos.linhas(function (error, result) {
		if (req.session.autenticar) {
			res.render('administrador/linhas', {
				titulo: 'Transporte público de Dourados-MS',
				user: req.session.user,
				linhas: result
			});
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.Ruas = function (req, res) {
	pontos.ruas(function (error, result) {
		if (req.session.autenticar) {
			res.render('administrador/ruas', {
				titulo: 'Transporte público de Dourados-MS',
				user: req.session.user,
				ruas: result
			});
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.pontos = function (req, res) {
	pontos.pontos_todos(function (error, result) {
		if (req.session.autenticar) {
			res.render('administrador/pontos', {
				titulo: 'Transporte público de Dourados-MS',
				user: req.session.user,
				pontos: result
			});
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.usuarios = function (req, res) {
	pontos.usuarios(function (error, usuarios) {
		if (req.session.autenticar) {
			res.render('administrador/usuarios', {
				titulo: 'Transporte público de Dourados-MS',
				user: req.session.user,
				usuarios: usuarios
			});
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.linhas_cadastros = function (req, res) {
	if (req.session.autenticar) {
		res.render('administrador/cadastrar_linha', { titulo: 'Transporte público de Dourados-MS', msg: [], user: req.session.user });
	} else {
		res.redirect('/');
	}

}

module.exports.salvar_linha = function (req, res) {

	req.assert('nome_linha', 'Por favor, informe  nome da linha!!! ').notEmpty();
	req.assert('saida_linha', 'Por favor, informe para inicio !!!').notEmpty();
	req.assert('chegada_linha', 'Por favor, informe parada final !!!').notEmpty();

	var erros = req.validationErrors();

	pontos.linhas(function (error, result) {
		if (erros) {
			if (req.session.autenticar) {
				res.render('administrador/cadastrar_linha', { titulo: 'Transporte público de Dourados-MS', msg: erros, user: req.session.user });
			} else {
				res.redirect('/login');
			}
			return;
		}


		pontos.insert_linha(req.body, function (erros, results) {
			if (erros) {
				console.log(erros)
			} else {
				res.render('administrador/cadastrar_linha', { titulo: 'Transporte público de Dourados-MS', msg: [{ msg: 'Salvo com sucesso !!!' }], user: req.session.user });
			}
		})
	});
}

module.exports.salvar_rua = function (req, res) {

	req.assert('nome_rua', 'Por favor, informe  nome da rua!!! ').notEmpty();

	var erros = req.validationErrors();

	pontos.linhas(function (error, result) {
		if (erros) {
			if (req.session.autenticar) {
				res.render('administrador/cadastrar_linha', { titulo: 'Transporte público de Dourados-MS', msg: erros, user: req.session.user });
			} else {
				res.redirect('/login');
			}
			return;
		}


		pontos.insert_Rua(req.body, function (erros, results) {
			if (erros) {
				console.log(erros)
			} else {
				res.render('administrador/cadastrar_linha', { titulo: 'Transporte público de Dourados-MS', msg: [{ msg: 'Salvo com sucesso !!!' }], user: req.session.user });
			}
		})
	});
}

module.exports.bairros_cadastros = function (req, res) {
	pontos.linhas(function (error, result) {
		if (req.session.autenticar) {
			res.render('administrador/cadastrar_bairro', { titulo: 'Transporte público de Dourados-MS', linhas: result, msg: [], user: req.session.user });
		} else {
			res.redirect('/login');
		}
	})
}

module.exports.salvar_bairro = function (req, res) {
	req.assert('lat', 'Por favor, informe  latitude do bairro !!! ').notEmpty();
	req.assert('lng', 'Por favor, informe longitude do bairro !!!').notEmpty();
	req.assert('nome_bairro', 'Por favor, informe nome do bairro  !!!').notEmpty();

	var erros = req.validationErrors();

	pontos.linhas(function (error, result) {
		if (erros) {
			if (req.session.autenticar) {
				res.render('administrador/cadastrar_bairro', { titulo: 'Transporte público de Dourados-MS', linhas: result, msg: erros, user: req.session.user });
			} else {
				res.redirect('/login');
			}
			return;
		}


		pontos.insert_bairro(req.body, function (erros, results) {
			if (erros) {
				console.log(erros)
			} else {
				res.render('administrador/cadastrar_bairro', { titulo: 'Transporte público de Dourados-MS', linhas: result, msg: [{ 'msg': 'Salvo com sucesso !!!' }], user: req.session.user });
			}
		})
	});
}

module.exports.pontos_cadastros = function (req, res) {

	if (req.session.autenticar) {
		pontos.bairros(function (erros, bairros) {
			pontos.ruas(function (erros, ruas) {
				res.render('administrador/cadastrar_pontos', { titulo: 'Transporte público de Dourados-MS', bairros: bairros, rua: ruas, msg: [], user: req.session.user });
			})
		})
	} else {
		res.redirect('/');
	}
}

module.exports.salvar_ponto = function (req, res) {

	req.assert('lat_ponto', 'Por favor, informe  latitude do ponto !!! ').notEmpty();
	req.assert('lng_ponto', 'Por favor, informe longitude do ponto !!!').notEmpty();

	var error = req.validationErrors();

	pontos.bairros(function (erros, bairros) {
		pontos.ruas(function (erros, ruas) {
			if (error) {
				if (req.session.autenticar) {
					res.render('administrador/cadastrar_pontos', { titulo: 'Transporte público de Dourados-MS', bairros: bairros, rua: ruas, msg: error, user: req.session.user });
				} else {
					res.redirect('/login');
				}
				return;
			}

			pontos.insert_pontos(req.body, function (erros, results) {
				if (erros) {
					console.log(erros)
				} else {
					res.render('administrador/cadastrar_pontos', { titulo: 'Transporte público de Dourados-MS', bairros: bairros, rua: ruas, msg: [{ msg: 'Cadastrado com sucesso !!!' }], user: req.session.user });
				}
			})
		})
	});
}

