module.exports = function (app) {
	app.get('/ponto/:id', function (req, res) {
		app.controllers.ponto.pontos(app, req, res);
	})
}