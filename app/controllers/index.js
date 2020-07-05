let connection = require('../../config/connect_banco.js');
let pontos = require('../models/models.js')(connection);
let md5 = require('md5');

module.exports.index = function (req, res) {
	pontos.bairros(function (error, result) {
		if (req.session.autenticar) {
			if (req.session.nivel_acesso == 'Administrador') {
				res.redirect('/reclamacoes/todos');
			} else {
				res.render('usuario/index', { titulo: 'Transporte público de Dourados-MS', bairros: result, user: req.session.user });
			}
		} else {
			res.redirect('/login');
		}
	});
};

module.exports.dados_pessoais = function (req, res) {
	if (req.session.autenticar) {
		res.render('usuario/dados_pessoais', { titulo: 'Transporte público de Dourados-MS', user: req.session.user, msg: [] });
	} else {
		res.redirect('/');
	}
}

module.exports.update_dados_pessoais = function (req, res) {
	req.assert('nome_usuario', 'Por favor, informe  nome completo !!! ').notEmpty();
	req.assert('email_usuario', 'Por favor,  informe seu email !!!').notEmpty();
	req.assert('senha_usuario', 'Por favor, informe uma senha !!!').notEmpty();

	req.assert('telefone_usuario', 'Por favor, informe seu telefone!!! ').notEmpty();
	req.assert('cpf_usuario', 'Por favor, informe seu CPF !!!').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render('usuario/dados_pessoais', {
			titulo: 'Dados pessoais | Routebus',
			msg: erros,
			user: req.session.user
		});
		return;
	}

	let dados = req.body;
	dados.senha_usuario = md5(dados.senha_usuario);

	if (req.session.autenticar) {
		pontos.update_dados_usuario(dados, req.session.user[0].id_usuario, function (error, result) {
			if (error) {
				console.log(error);
			} else {
				res.render('usuario/dados_pessoais', {
					titulo: 'Transporte público de Dourados-MS',
					user: req.session.user,
					msg: [{ msg: 'Informações foram alteradas com sucesso !!!' }]
				});
			}
		});
	} else {
		res.redirect('/login');
	}
}


module.exports.esqueceu_senha = function (req, res) {
	res.render('usuario/senha', { titulo: 'Acesse sua conta !!!', msg: [], dados: [] });
}
module.exports.senha_mudar = function (req, res) {

	let nodemailer = require('nodemailer');

	pontos.recuperar_senha(req.body.cpf_usuario, function (error, result) {
		if (result.length > 0) {
			result.forEach(function (dados) {
				if (error) {
					console.log(error)
				} else {
					var transporter = nodemailer.createTransport({
						service: 'gmail',
						auth: {
							user: 'marcoslopesg7@gmail.com',
							pass: '99510796'
						},
						tls: {
							rejectUnauthorized: false
						}
					});

					var mailOptions = {
						from: 'marcoslopesg7@gmail.com',
						to: dados.email_usuario,
						subject: 'Recuperação de acesso',
						text: 'Você solicitou recuperação de senha, segue informações, senha:' + dados.senha_usuario
					};

					transporter.sendMail(mailOptions, function (error, info) {
						if (error) {
							res.render('usuario/login', { titulo: 'Acesse sua conta !!!', msg: [{ msg: 'Não foi possivel enviar recuperação de senha, tente novamente.' }], dados: [] });
						} else {
							res.render('usuario/login', { titulo: 'Acesse sua conta !!!', msg: [{ msg: 'Verifique seu email ' + dados.email_usuario + '' }], dados: [] });
						}
					});
				}
			})
		} else {
			res.render('usuario/login', { titulo: 'Acesse sua conta !!!', msg: [{ msg: 'Informações de conta não encontrada !!!' }], dados: [] });
		}
	});
}	