module.exports.login = function(app,req,res) {
	res.render('usuario/login',{titulo:'Acesse sua conta !!!',msg:[],dados:[]});
}
module.exports.cadastrar_usuario = function(app,req,res) {
	res.render('usuario/cadastro',{titulo:'Acesse sua conta !!!',msg:[]});
}

module.exports.cadastrar_usuario_salvar = function(app,req,res){
	var connection = app.config.connect_banco(),dados,img_nome;
	var pontos = new app.app.models.models(connection);
	

	req.assert('nome_usuario','Por favor, informe  nome completo !!! ').notEmpty();
	req.assert('email_usuario','Por favor,  informe seu email !!!').notEmpty();
	req.assert('senha_usuario','Por favor, informe uma senha !!!').notEmpty();

	req.assert('telefone_usuario','Por favor, informe seu telefone!!! ').notEmpty();
	req.assert('cpf_usuario','Por favor, informe seu CPF !!!').notEmpty();


	var erros = req.validationErrors();


	if (erros) {
		res.render('usuario/cadastro',{titulo:'Acesse sua conta !!!',msg:erros});
		return;
	}	

	if (!req.file) {
		img_nome = '';
	}else{
		img_nome = 'uploads/'+req.file.originalname;
	}
	pontos.insert_usuario(dados = {
		'nome_usuario': req.body.nome_usuario,
		'email_usuario': req.body.email_usuario,
		'senha_usuario': req.body.senha_usuario,
		'telefone_usuario':req.body.telefone_usuario,
		'cpf_usuario':req.body.cpf_usuario,
		'perfil_usuario':img_nome,
		'id_tipo_usuario':1
	}, function(error,result){
		if (error) {
			console.log(error);
		}else{
			res.render('usuario/login',{titulo:'Acesse sua conta !!!',msg:[{msg:'Cadastro eviando com sucesso !!!'}],dados:[]});			
		}
	});
}

module.exports.autenticar = function(app,req,res){
	var dados  = req.body;

	var connection = app.config.connect_banco();
	var models = new app.app.models.models(connection);

	req.assert('user','Por favor, informe seu nome !!! ').notEmpty();;
	req.assert('password','Por favor, informe sua senha !!!').notEmpty();
	req.assert('password','Caracter insuficiente , Preencha no minimo 6 máximo 8').len(6,8);


	var erros = req.validationErrors();


	if (erros) {
		res.render('usuario/login',{titulo:'Acesse sua conta !!!',msg:erros,dados:req.body});
		return;
	}

	models.logar(dados.user,dados.password,function(error,results){
		if (error) {
			console.log(error);
		}else{
			if (results.length == 0) {
				res.render('usuario/login',{titulo:'Acesse sua conta !!!',msg:[{msg:'Desculpe seu cadastro não foi encontrado !!!'}],dados:req.body});
			}else{
				req.session.user  =  results; 
				req.session.autenticar = true;
				req.session.nivel_acesso = results[0].nome_tipo_usuario;
				res.redirect('/');	
			};
		};
	});
}
module.exports.finalizar_session = function(app,req,res){
	req.session.destroy(function(error){
		if(error){
			console.log(error);
		}else{
			res.redirect('/');
		}
	});
}