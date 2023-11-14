const express = require('express');
const mysql = require('mysql');
const dbInfo = require('./database.js');
var conn = mysql.createConnection(dbInfo);
var router = express.Router();

router.get('/:id', (req, res) => {
	var sql = `select * from MANAGER where id = ${req.params.id}'`;
    conn.query(sql, (err, rows) => {
    	console.log(rows);
        res.send(rows);
    });
});