const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysql',
	database : 'trell'
});

connection.connect(function(error){
	if(error) throw error;
	console.log('connected');
});




module.exports = connection;



