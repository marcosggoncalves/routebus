module.exports.index = function(app,req,res) {
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	pontos.bairros(function(error,result){
		if(req.session.autenticar){
			if (req.session.nivel_acesso == 'Administrador') {
				res.redirect('/Todas/reclamacao');
			}else{
				res.render('usuario/index',{titulo:'Transporte público de Dourados-MS',bairros:result,user:req.session.user});
			}
		}else{
			res.redirect('/login');
		}
	});
};

module.exports.dados_pessoais = function(app,req,res) {
	if (req.session.autenticar) {
		res.render('usuario/dados_pessoais',{titulo:'Transporte público de Dourados-MS',user:req.session.user});
	}else{
		res.redirect('/');
	}
}

module.exports.update_dados_pessoais = function(app,req,res){
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);
	if (req.session.autenticar) {
		pontos.update_dados_usuario(req.body,req.session.user[0].id_usuario,function(error,result){
			if(error){
				console.log(error);
			}else{
				res.redirect('/');
			}
		});
	}else{
		res.redirect('/login');
	}
}


module.exports.esqueceu_senha = function(app,req,res){
	res.render('usuario/senha',{titulo:'Acesse sua conta !!!',msg:[],dados:[]});
}
module.exports.senha_mudar = function(app,req,res){

	let nodemailer = require('nodemailer');
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	pontos.recuperar_senha(req.body.cpf_usuario,function(error,result){
			if(result.length > 0){
			result.forEach(function(dados){
				if (error) {
					console.log(error)
				}else{
					var transporter = nodemailer.createTransport({
					  service: 'gmail',
					  auth: {
					    user: 'marcoslopes5687@gmail.com',
					    pass: '98343255'
					  }
					});

					var mailOptions = {
					  from: 'marcoslopesg7@gmail.com',
					  to: dados.email_usuario,
					  subject: 'Recuperação de acesso',
					  text:'Você solicitou recuperação de senha, segue informações, senha:'+ dados.senha_usuario
					};

					transporter.sendMail(mailOptions, function(error, info){
					  if (error) {
					    console.log(error);
					  } else {
					   res.render('usuario/login',{titulo:'Acesse sua conta !!!',msg:[{msg:'Verifique seu email '+dados.email_usuario+''}],dados:[]});
					  }
					});
				}
			})
		}else{
			 res.render('usuario/login',{titulo:'Acesse sua conta !!!',msg:[{msg:'Informações de conta não encontrada !!!'}],dados:[]});
		}
	});
}	