module.exports = function (app) {
	console.log("--------------------------------------------")
	console.log(app.controllers)
	console.log(app.controllers.index)
	console.log(app.controllers.index.index)
	console.log(app.models)
	console.log("--------------------------------------------")
	app.get('/', function (req, res) {
		app.app.controllers.index.index(app, req, res);
	})
	app.get('/dados/pessoais', function (req, res) {
		app.app.controllers.index.dados_pessoais(app, req, res);
	});
	app.get('/esquece/senha', function (req, res) {
		app.app.controllers.index.esqueceu_senha(app, req, res);
	})
	app.post('/alterar/dados/pessoais', function (req, res) {
		app.app.controllers.index.update_dados_pessoais(app, req, res);
	});
	app.post('/senha', function (req, res) {
		app.app.controllers.index.senha_mudar(app, req, res);
	})
}