const mysql = require('mysql2');

const connect = function () {
	return mysql.createConnection({
		host: 'routebus-mysql',
	 	user: 'routebus',
	 	password: 'routebus#2024',
	 	database: 'routebus'
	});
}

module.exports = connect();