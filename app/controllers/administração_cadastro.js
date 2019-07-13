module.exports.vias = function(app,req,res) {
	if(req.session.autenticar){
		res.render('administrador/cadastrar_via',{titulo:'Transporte público de Dourados-MS',msg:[],user:req.session.user});
	}else{
		res.redirect('/login');
	}
}


module.exports.salvar_via = function(app,req,res){
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	req.assert('nome_sentidovia','Por favor, informe  nome da via !! ').notEmpty();
	var erros = req.validationErrors();

	if(erros){
		res.render('administrador/cadastrar_via',{titulo:'Transporte público de Dourados-MS',msg:erros,user:req.session.user});
		return;
	}

	pontos.insert_via(req.body,function(error,result){
		if(error){
			console.log(error);
		}else{
			res.redirect('/Todas/reclamacao');
		}		
	});
}



module.exports.salvar_horario_classificacao = function(app,req,res){
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	req.assert('nome_classifcação','Por favor, informe nome para classificação !! ').notEmpty();
	var erros = req.validationErrors();

	if(erros){
		res.render('administrador/cadastrar_via',{titulo:'Transporte público de Dourados-MS',msg:erros,user:req.session.user});		
		return;
	}

	pontos.insert_classificação(req.body,function(error,result){
		if(error){
			console.log(error);
		}else{
			res.redirect('/Todas/reclamacao');
		}
	});
}



module.exports.cadastros_horario = function(app,req,res){
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	if(req.session.autenticar){
		pontos.classificação_horario(function(error,result3){
			pontos.horario(function(error,result2){
				pontos.bairros(function(error,result){
					pontos.vias(function(error,results){
						res.render('administrador/cadastrar_horario',{
							titulo:'Transporte público de Dourados-MS',
							msg:[],
							user:req.session.user,
							vias:results,
							bairros:result,
							horario:result2,
							classificação:result3
						});
					});
				});
			});
		});
	}else{
		res.redirect('/login');
	}
}
module.exports.cadastros_horario_salvar = function(app,req,res){
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	req.assert('horario_time','Por favor, informe um horário !! ').notEmpty();
	req.assert('percurso_viagem','Por favor, informe percurso de inicio !! ').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		pontos.classificação_horario(function(error,result3){
			pontos.horario(function(error,result2){
				pontos.bairros(function(error,result){
					pontos.vias(function(error,results){
						res.render('administrador/cadastrar_horario',{
							titulo:'Transporte público de Dourados-MS',
							msg:erros,
							user:req.session.user,
							vias:results,
							bairros:result,
							horario:result2,
							classificação:result3
						});
					});
				});
			});
		});
		return;
	}
	pontos.insert_horario(req.body,function(error,result){
		if(error){
			console.log(error);
		}else{
			pontos.classificação_horario(function(error,result3){
				pontos.horario(function(error,result2){
					pontos.bairros(function(error,result){
						pontos.vias(function(error,results){
							res.render('administrador/cadastrar_horario',{
								titulo:'Transporte público de Dourados-MS',
								msg:[{msg:'Horário salvo com sucesso !!'}],
								user:req.session.user,
								vias:results,
								bairros:result,
								horario:result2,
								classificação:result3
							});
						});
					});
				});
			});
		};
	});
}

module.exports.classificação_horario = function(app,req,res){
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	pontos.insert_classificação_horario(req.body,function(error,result){
		if(error){
			console.log(error);
		}else{
			pontos.classificação_horario(function(error,result3){
				pontos.horario(function(error,result2){
					pontos.bairros(function(error,result){
						pontos.vias(function(error,results){
							res.render('administrador/cadastrar_horario',{
								titulo:'Transporte público de Dourados-MS',
								msg:[{msg:'Classificação salva com sucesso !!'}],
								user:req.session.user,
								vias:results,
								bairros:result,
								horario:result2,
								classificação:result3
							});
						});
					});
				});
			});
		}
	});
}