module.exports = function (app) {
	console.log(app)
	app.get('/', function (req, res) {
		app.app.index.index(app, req, res);
	})
	app.get('/dados/pessoais', function (req, res) {
		app.app.index.dados_pessoais(app, req, res);
	});
	app.get('/esquece/senha', function (req, res) {
		app.app.index.esqueceu_senha(app, req, res);
	})
	app.post('/alterar/dados/pessoais', function (req, res) {
		app.app.index.update_dados_pessoais(app, req, res);
	});
	app.post('/senha', function (req, res) {
		app.app.index.senha_mudar(app, req, res);
	})
}