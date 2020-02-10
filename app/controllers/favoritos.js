module.exports.salvar = function(app,req,res) {

	let connection = app.config.connect_banco(),dados;
	let ponto = new app.app.models.models(connection);
	let date = new Date();

	ponto.new_favoritos(dados={
		'data_salvo':date.toLocaleDateString() +' às '+ date.toLocaleTimeString(),
		'id_usuario':req.params.id_usuario,
		'id_bairro':req.params.id_bairro
	},function(error,result){
		if (error) {
			console.log(error);
		}else{
			res.redirect('/favoritos');
		}
	});
}

module.exports.favoritos = function(app,req,res){
	let connection = app.config.connect_banco();
	let ponto = new app.app.models.models(connection);	

	if(req.session.autenticar){
		ponto.favoritos(req.session.user[0].id_usuario,function(error,result){
			if (result.length > 0) {
				res.render('usuario/favoritos',
					{
						favoritos:result,titulo:'Transporte público de Dourados-MS',
						user:req.session.user,
						msg:[]
				});
			}else{
				res.render('usuario/favoritos',
					{
						favoritos:result,titulo:'Transporte público de Dourados-MS',
						user:req.session.user,
						msg:[{msg:'Até o momento não foi salvo nenhuma linha.'}]
				});
			}
		})
	}else{
		res.redirect('/login');
	}
}