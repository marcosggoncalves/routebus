module.exports = function(app) {

	var upload = require('../../scripts_base/upload');
	
	app.get('/login',function(req,res){
		app.app.controllers.login.login(app,req,res);
	})
	app.get('/finalizar/session',function(req,res){
		app.app.controllers.login.finalizar_session(app,req,res);	
	})
	app.get('/cadastrar/conta/usuario',function(req,res){
		app.app.controllers.login.cadastrar_usuario(app,req,res);	
	})
	app.post('/cadastrar/conta/usuario/salvar',upload.single('anexo_arquivo'),function(req,res){
		app.app.controllers.login.cadastrar_usuario_salvar(app,req,res);	
	})
	app.post('/logar',function(req,res){
		app.app.controllers.login.autenticar(app,req,res);
	})
}