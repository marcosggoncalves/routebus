let connection = require('../../config/database.js');
let pontos = require('../models/models.js')(connection);

module.exports.pontos = function (req, res) {
	let variaveis_globais = {
		id_bairro: req.params.id,
		dados: '',
		filter_time: '',
		date: new Date(),
		semana: ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"],
		classifacao: ['UTEIS', 'SÁBADO', 'DOMINGOS/FERIADOS', 'PONTOS FACULTATIVOS']

	}

	if (variaveis_globais.semana[variaveis_globais.date.getDay() - 1] == variaveis_globais.semana[6]) {
		variaveis_globais.filter_time = variaveis_globais.classifacao[2];
	} else if (variaveis_globais.semana[variaveis_globais.date.getDay() - 1] == variaveis_globais.semana[5]) {
		variaveis_globais.filter_time = variaveis_globais.classifacao[1];
	} else {
		variaveis_globais.filter_time = variaveis_globais.classifacao[0];
	}
	if (req.session.user) {
		pontos.pontos(variaveis_globais.id_bairro, function (error, result) {

			if (result.length === 0) {
				res.redirect('/bairros');
			}

			result.forEach(function (pontos) {
				variaveis_globais.dados = {
					'id_bairro': pontos.id_bairro,
					'bairro': pontos.nome_bairro,
					'lat_bairro': pontos.lat,
					'lng_bairro': pontos.lng,
					'saida_linha': pontos.saida_linha,
					'chegada_linha': pontos.chegada_linha,
					'linha': pontos.nome_linha,
					'horarios_corrido': variaveis_globais.filter_time
				}
			})
			pontos.horarios(variaveis_globais.dados.id_bairro, variaveis_globais.filter_time, function (error, results) {
				res.render('usuario/linha', {
					titulo: 'Bairro: ' + variaveis_globais.dados.bairro,
					pontos: result,
					dados: variaveis_globais.dados,
					user: req.session.user,
					horarios: results
				});
			});
		})
	} else {
		res.redirect('/login');
	}
}