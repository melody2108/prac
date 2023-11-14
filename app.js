const express = require('express');
const app = express();

const mysql = require('mysql');
const dbInfo = require('./database.js');
var conn = mysql.createConnection(dbInfo);

var managerRouter = require('./routes.js');

app.use('/', managerRouter);

app.listen(3004, () => {
	console.log('Server is running on port 3004');
});