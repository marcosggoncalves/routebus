let connection = require('../../config/database.js');
let pontos = require('../models/models.js')(connection);

module.exports.efetuar_reclamacao = function (req, res) {
	if (req.session.autenticar) {
		res.render('usuario/efetuar_reclamacao', { titulo: 'Transporte público de Dourados-MS', msg: [], user: req.session.user });
	} else {
		res.redirect('/login');
	}
}

module.exports.salvar_reclamacao = function (req, res) {
	req.assert('data_de_reclamacao', 'Por favor, informe  data !!! ').notEmpty();
	req.assert('desc_reclamacao', 'Por favor, descreva há reclamacao !!!').notEmpty();
	req.assert('tipo_reclamção', 'Por favor, descreva o assunto da reclamacao !!!').notEmpty();

	var erros = req.validationErrors();


	if (erros) {
		if (req.session.autenticar) {
			res.render('usuario/efetuar_reclamacao', { titulo: 'Transporte público de Dourados-MS', msg: erros, user: req.session.user });
		} else {
			res.redirect('/login');
		}
		return;
	}

	if (!req.file) {
		img_nome = '';
	} else {
		img_nome = 'uploads/' + req.file.originalname;
	}
	pontos.salvar_reclamacao(dados = {
		'data_de_reclamacao': req.body.data_de_reclamacao,
		'desc_reclamacao': req.body.desc_reclamacao,
		'tipo_reclamacao': req.body.tipo_reclamção,
		'anexo_arquivo': img_nome,
		id_usuario: req.session.user[0].id_usuario,
		'STATUS': 'Pendente'
	}, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			res.render('usuario/efetuar_reclamacao', { titulo: 'Transporte público de Dourados-MS', msg: [{ msg: 'Sua reclamacao foi encaminhada para empresa viação dourados, aguarde nosso retorno, entraremos em contato em breve!!!' }], user: req.session.user });
		}
	});
}

module.exports.todas_reclamacoes = function (req, res) {
	if (req.session.autenticar) {
		pontos.reclamacoes_usuario(req.session.user[0].id_usuario, req.params.busca, function (error, result) {
			if (result.length > 0) {
				res.render('usuario/reclamações', {
					titulo: 'Transporte público de Dourados-MS',
					titulo_1: 'Reclamações efetuadas',
					reclamacoes: result,
					comentarios: [],
					cont: 0,
					msg: [],
					user: req.session.user
				});
			} else {
				res.render('usuario/reclamações', {
					titulo: 'Transporte público de Dourados-MS',
					titulo_1: 'Reclamações efetuadas',
					reclamacoes: result,
					comentarios: [],
					cont: 0,
					msg: [{ msg: 'Não existe reclamações efetuado até o momento' }],
					user: req.session.user
				});
			}

		});
	} else {
		res.redirect('/');
	}
};

module.exports.todos_comentarios = function (req, res) {
	if (req.session.autenticar) {
		pontos.reclamacoes_usuario(req.session.user[0].id_usuario, req.params.busca, function (error, results) {
			pontos.reclamacoes_comentarios(req.params.id, function (error, result) {
				if (result.length <= 0) {
					res.render('usuario/reclamações', {
						titulo: 'Transporte público de Dourados-MS',
						titulo_1: 'Reclamações efetuadas',
						reclamacoes: results,
						comentarios: [],
						cont: 0,
						msg: [{ msg: 'Nenhum comentário realizado!!' }],
						user: req.session.user
					});
				} else {
					if (error) {
						console.log(error);
					} else {
						res.render('usuario/reclamações', {
							titulo: 'Transporte público de Dourados-MS',
							titulo_1: 'Reclamações efetuadas',
							reclamacoes: result,
							comentarios: result,
							cont: result.length - 1,
							msg: [],
							user: req.session.user
						});
					}
				}
			});
		});
	} else {
		res.redirect('/');
	}
};

module.exports.new_comentar = function (req, res) {
	let dados = null;
	var date = new Date();

	pontos.new_comentar_reclamacao(dados = {
		'comentario': req.body.comentario,
		'data_comentario': date.toLocaleDateString() + ' às ' + date.toLocaleTimeString(),
		'id_reclamacao': req.params.id,
		'id_usuario': req.session.user[0].id_usuario
	}, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			res.redirect('/reclamacoes/comentarios/' + req.params.busca + '/' + req.params.id + '');
		}
	});
};

module.exports.todas_reclamacoes_adminstrador_status = function (req, res) {
	if (req.session.autenticar) {
		if (req.session.nivel_acesso == 'Administrador') {
			pontos.reclamacoes_status(req.params.busca, function (error, result) {
				if (result.length > 0) {
					res.render('usuario/reclamações', {
						titulo: 'Transporte público de Dourados-MS',
						titulo_1: 'Reclamações efetuadas',
						reclamacoes: result,
						comentarios: [],
						cont: 0,
						msg: [],
						user: req.session.user
					});
				} else {
					res.render('usuario/reclamações', {
						titulo: 'Transporte público de Dourados-MS',
						titulo_1: 'Reclamações efetuadas',
						reclamacoes: result,
						comentarios: [],
						cont: 0,
						msg: [{ msg: 'Não existe reclamações efetuado até o momento' }],
						user: req.session.user
					});
				}

			});
		} else {
			res.redirect('/login');
		}
	} else {
		res.redirect('/login');
	}
};

module.exports.todas_reclamacoes_adminstrador = function (req, res) {
	if (req.session.autenticar) {
		if (req.session.nivel_acesso == 'Administrador') {
			pontos.reclamacoes(function (error, result) {
				if (result.length > 0) {
					res.render('usuario/reclamações', {
						titulo: 'Transporte público de Dourados-MS',
						titulo_1: 'Reclamações efetuadas',
						reclamacoes: result,
						comentarios: [],
						cont: 0,
						msg: [],
						user: req.session.user
					});
				} else {
					res.render('usuario/reclamações', {
						titulo: 'Transporte público de Dourados-MS',
						titulo_1: 'Reclamações efetuadas',
						reclamacoes: result,
						comentarios: [],
						cont: 0,
						msg: [{ msg: 'Não existe reclamações efetuado até o momento' }],
						user: req.session.user
					});
				}

			});
		} else {
			res.redirect('/login');
		}
	} else {
		res.redirect('/login');
	}
};

module.exports.status_update = function (req, res) {
	pontos.status_update(req.params.id, req.params.status, function (error, result) {
		if (error) {
			console.log(error);
		} else {
			res.redirect('/reclamacoes/todos');
		}
	})
}
module.exports.buscar_usuario_reclamacao = function (req, res) {
	if (req.session.autenticar) {
		if (req.session.nivel_acesso == 'Administrador') {
			pontos.reclamacoes_usuario_especifico(req.params.id_usuario, function (error, result) {
				if (result.length > 0) {
					res.render('usuario/reclamações', {
						titulo: 'Transporte público de Dourados-MS',
						titulo_1: 'Reclamações efetuadas',
						reclamacoes: result,
						comentarios: [],
						cont: 0,
						msg: [],
						user: req.session.user
					});
				} else {
					res.render('usuario/reclamações', {
						titulo: 'Transporte público de Dourados-MS',
						titulo_1: 'Reclamações efetuadas',
						reclamacoes: result,
						comentarios: [],
						cont: 0,
						msg: [{ msg: 'Não existe reclamações efetuado até o momento' }],
						user: req.session.user
					});
				}

			});
		} else {
			res.redirect('/login');
		}
	} else {
		res.redirect('/login');
	}
};
