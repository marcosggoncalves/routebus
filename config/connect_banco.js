const mysql = require('mysql');

const Conmysql = function() {
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'routebus'
	});
}

module.exports = ()=>{
	return Conmysql;
}