module.exports = function(app) {
	app.get('/administrativo/bairros',function(req,res){
		app.app.controllers.administração.bairros(app,req,res);
	})
	app.get('/administrativo/bairros/horarios/:id_bairro',function(req,res){
		app.app.controllers.administração.horario_bairros(app,req,res);
	})
	app.get('/administrativo/bairros/linhas',function(req,res){
		app.app.controllers.administração.linhas(app,req,res);
	})
	app.get('/administrativo/bairros/ruas',function(req,res){
		app.app.controllers.administração.Ruas(app,req,res);
	})
	app.get('/administrativo/bairros/pontos',function(req,res){
		app.app.controllers.administração.pontos(app,req,res);
	})
	app.get('/administrativo/bairros/usuarios',function(req,res){
		app.app.controllers.administração.usuarios(app,req,res);
	})
	app.get('/administrativo/bairros/linhas/cadastros',function(req,res){
		app.app.controllers.administração.linhas_cadastros(app,req,res);
	})
	// ´´´´´´


	app.get('/administrativo/cadastros/via',function(req,res){
		app.app.controllers.administração_cadastro.vias(app,req,res);
	})
	app.get('/administrativo/cadastros/horario',function(req,res){
		app.app.controllers.administração_cadastro.cadastros_horario(app,req,res);
	})
	app.post('/cadastrar_via',function(req,res){
		app.app.controllers.administração_cadastro.salvar_via(app,req,res);
	})
	app.post('/cadastrar_classifacao_horario',function(req,res){
		app.app.controllers.administração_cadastro.salvar_horario_classificacao(app,req,res);
	})
	app.post('/cadastrar_horario',function(req,res){
		app.app.controllers.administração_cadastro.cadastros_horario_salvar(app,req,res);
	})
	app.post('/cadastrar_horario/classificacao',function(req,res){
		app.app.controllers.administração_cadastro.classificacao_horario(app,req,res);
	})


	// ´´´´´´
	app.get('/administrativo/bairros/pontos/cadastros',function(req,res){
		app.app.controllers.administração.pontos_cadastros(app,req,res);
	})
	app.get('/administrativo/bairros/bairros/cadastros',function(req,res){
		app.app.controllers.administração.bairros_cadastros(app,req,res);
	})
	app.post('/cadastrar_bairro',function(req,res){
		app.app.controllers.administração.salvar_bairro(app,req,res);
	})
	app.post('/cadastrar_linha',function(req,res){
		app.app.controllers.administração.salvar_linha(app,req,res);
	})
	app.post('/cadastrar_rua',function(req,res){
		app.app.controllers.administração.salvar_rua(app,req,res);
	})
	app.post('/cadastrar_Ponto',function(req,res){
		app.app.controllers.administração.salvar_ponto(app,req,res);
	})	
}