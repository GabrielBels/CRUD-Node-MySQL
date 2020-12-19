'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdnodecrud'
});

dbConn.connect((err) => {
    if (err){
        throw err;
    }
    console.log('Banco de dados conectado!');
});

module.exports = dbConn;