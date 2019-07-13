const mysql = require('mysql');

const Conmysql = function() {
	console.log('Conexão banco de dados mysql');

	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'tcc'
	});
}

module.exports = function(){
	console.log('Conexão realizada com sucesso');
	return Conmysql;
}