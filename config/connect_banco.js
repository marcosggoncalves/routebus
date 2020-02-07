const mysql = require('mysql');

const Conmysql = function () {
	return mysql.createConnection({
		host: 'mysql.routebus.kinghost.net',
		user: 'routebus_add1',
		password: 'Lopes9951',
		database: 'routebus'
	});
}

module.exports = () => {
	return Conmysql;
}