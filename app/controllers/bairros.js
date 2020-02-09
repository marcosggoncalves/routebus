module.exports.bairros = function(app,req,res) {
	let connection = app.config.connect_banco();
	let pontos = new app.app.models.models(connection);

	pontos.bairros(function(error,result){
		if(req.session.autenticar){
			res.render('usuario/bairros',{titulo:'Transporte público de Dourados-MS',titulo_1:'Bairros de  Dourados-MS',bairros:result,user:req.session.user});
		}else{
			res.redirect('/');
		}
	}) 	
}