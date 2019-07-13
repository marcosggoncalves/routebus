module.exports = function(app) {
	app.get('/ponto/:id',function(req,res) {
		app.app.controllers.ponto.pontos(app,req,res);
	})
}