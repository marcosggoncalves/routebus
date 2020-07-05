const mysql = require('mysql');

const connect = function () {
	return mysql.createConnection({
		host: 'localhost',
	 	user: 'root',
	 	password: '',
	 	database: 'routebus'
	});
}

module.exports = connect();