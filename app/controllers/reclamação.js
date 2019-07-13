 module.exports.efetuar_reclamacao = function(app,req,res) {
 	if(req.session.autenticar){
			res.render('usuario/efetuar_reclamacao',{titulo:'Transporte público de Dourados-MS',msg:[],user:req.session.user});
	}else{
		res.redirect('/login');
	}
}
module.exports.salvar_reclamação = function(app,req,res){
	var connection = app.config.connect_banco(),dados,img_nome;
	var pontos = new app.app.models.models(connection);
	
	req.assert('data_de_reclamação','Por favor, informe  data !!! ').notEmpty();
	req.assert('desc_reclamação','Por favor, descreva há reclamação !!!').notEmpty();
	req.assert('tipo_reclamção','Por favor, descreva o assunto da reclamação !!!').notEmpty();

	var erros = req.validationErrors();


	if (erros) {
		if (req.session.autenticar) {
			res.render('usuario/efetuar_reclamacao',{titulo:'Transporte público de Dourados-MS',msg:erros,user:req.session.user});
		}else{
			res.redirect('/login');
		}
		return;
	}

	if (!req.file) {
		img_nome = '';
	}else{
		img_nome = 'uploads/'+req.file.originalname;
	}
	pontos.salvar_reclamação(dados = {
		'data_de_reclamação': req.body.data_de_reclamação,
		'desc_reclamação': req.body.desc_reclamação,
		'tipo_reclamção': req.body.tipo_reclamção,
		'anexo_arquivo':img_nome,
		id_usuario: req.session.user[0].id_usuario,
		'STATUS':'Pendente'
	}, function(error,result){
		if (error) {
			console.log(error);
		}else{
			res.render('usuario/efetuar_reclamacao',{titulo:'Transporte público de Dourados-MS',msg:[{msg:'Sua reclamação foi encaminhada para empresa viação dourados, aguarde nosso retorno, entraremos em contato em breve!!!'}],user:req.session.user});
		}
	});
}
module.exports.todas_reclamações = function(app,req,res){
	var connection = app.config.connect_banco();
	var pontos = new app.app.models.models(connection);
	
	if(req.session.autenticar){
		pontos.reclamações_usuario(req.session.user[0].id_usuario,req.params.busca,function(error,result){
			if (result.length > 0) {
				res.render('usuario/reclamações',{
					titulo:'Transporte público de Dourados-MS',
					titulo_1:'Reclamações efetuadas',
					reclamações:result,
					comentarios:[],
					cont:0,
					msg:[],
					user:req.session.user
				});
			}else{
				res.render('usuario/reclamações',{
					titulo:'Transporte público de Dourados-MS',
					titulo_1:'Reclamações efetuadas',
					reclamações:result,
					comentarios:[],
					cont:0,
					msg:[{msg:'Não existe reclamações efetuado até o momento'}],
					user:req.session.user
				});
			}
			
		});
	}else{
		res.redirect('/login');
	}
};
module.exports.todos_comentarios = function(app,req,res,io){
	var connection = app.config.connect_banco();
	var pontos = new app.app.models.models(connection);


	if(req.session.autenticar){
		pontos.reclamações_usuario(req.session.user[0].id_usuario,req.params.busca,function(error,results){
			pontos.reclamações_comentarios(req.params.id,function(error,result){
					if(result.length <= 0){
						res.render('usuario/reclamações',{
								titulo:'Transporte público de Dourados-MS',
								titulo_1:'Reclamações efetuadas',
								reclamações:results,
								comentarios:[],
								cont:0,
								msg:[{msg:'Nenhum comentário realizado!!'}],
								user:req.session.user
							});
					}else{
						if (error) {
							console.log(error);
						}else{
							res.render('usuario/reclamações',{
								titulo:'Transporte público de Dourados-MS',
								titulo_1:'Reclamações efetuadas',
								reclamações:result,
								comentarios:result,
								cont:result.length-1,
								msg:[],
								user:req.session.user
							});
						}	
					}
				});
			});
		}else{
			res.redirect('/');
	}
};
module.exports.new_comentar = function(app,req,res){
	var connection = app.config.connect_banco(),dados;
	var pontos = new app.app.models.models(connection);

	pontos.new_comentar_reclamação(dados = {
		'comentario':req.body.comentario,
		'data_comentario':new Date(),
		'id_reclamação':req.params.id,
		'id_usuario': req.session.user[0].id_usuario
	},function(error,result){
		if(error){
			console.log(error);
		}else{
			res.redirect('/comentarios/'+req.params.busca+'/'+req.params.id+'');
		}
	});
};
module.exports.todas_reclamações_adminstrador_status = function(app,req,res){
	
	var connection = app.config.connect_banco();
	var pontos = new app.app.models.models(connection);

	if(req.session.autenticar){
		if(req.session.nivel_acesso == 'Administrador'){
			pontos.reclamações_status(req.params.busca,function(error,result){
				if (result.length > 0) {
					res.render('usuario/reclamações',{
						titulo:'Transporte público de Dourados-MS',
						titulo_1:'Reclamações efetuadas',
						reclamações:result,
						comentarios:[],
						cont:0,
						msg:[],
						user:req.session.user
					});
				}else{
					res.render('usuario/reclamações',{
						titulo:'Transporte público de Dourados-MS',
						titulo_1:'Reclamações efetuadas',
						reclamações:result,
						comentarios:[],
						cont:0,
						msg:[{msg:'Não existe reclamações efetuado até o momento'}],
						user:req.session.user
					});
				}
				
			});
		}else{
			res.redirect('/login');
		}
	}else{
		res.redirect('/login');
	}
};

module.exports.todas_reclamações_adminstrador = function(app,req,res){
	var connection = app.config.connect_banco();
	var pontos = new app.app.models.models(connection);

	if(req.session.autenticar){
		if(req.session.nivel_acesso == 'Administrador'){
			pontos.reclamações(function(error,result){
				if (result.length > 0) {
					res.render('usuario/reclamações',{
						titulo:'Transporte público de Dourados-MS',
						titulo_1:'Reclamações efetuadas',
						reclamações:result,
						comentarios:[],
						cont:0,
						msg:[],
						user:req.session.user
					});
				}else{
					res.render('usuario/reclamações',{
						titulo:'Transporte público de Dourados-MS',
						titulo_1:'Reclamações efetuadas',
						reclamações:result,
						comentarios:[],
						cont:0,
						msg:[{msg:'Não existe reclamações efetuado até o momento'}],
						user:req.session.user
					});
				}
				
			});
		}else{
			res.redirect('/login');
		}
	}else{
		res.redirect('/login');
	}
};

module.exports.status_update = function(app,req,res){
		var connection = app.config.connect_banco();
		var pontos = new app.app.models.models(connection);

		pontos.status_update(req.params.id,req.params.status,function(error,result){
			if (error) {
				console.log(error);
			}else{
				res.redirect('/Todas/reclamacao');
			}
		})
}
module.exports.buscar_usuario_reclamacao = function(app,req,res){
	var connection = app.config.connect_banco();
	var pontos = new app.app.models.models(connection);

	if(req.session.autenticar){
		if(req.session.nivel_acesso == 'Administrador'){
			pontos.reclamações_usuario_especifico(req.params.id_usuario,function(error,result){
				if (result.length > 0) {
					res.render('usuario/reclamações',{
						titulo:'Transporte público de Dourados-MS',
						titulo_1:'Reclamações efetuadas',
						reclamações:result,
						comentarios:[],
						cont:0,
						msg:[],
						user:req.session.user
					});
				}else{
					res.render('usuario/reclamações',{
						titulo:'Transporte público de Dourados-MS',
						titulo_1:'Reclamações efetuadas',
						reclamações:result,
						comentarios:[],
						cont:0,
						msg:[{msg:'Não existe reclamações efetuado até o momento'}],
						user:req.session.user
					});
				}
				
			});
		}else{
			res.redirect('/login');
		}
	}else{
		res.redirect('/login');
	}
};
