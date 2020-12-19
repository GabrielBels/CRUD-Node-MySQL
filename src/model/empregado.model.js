'use strict'

let dbConn = require('./../../config/db.config');

var Empregado = function (empregado){
    this.nome = empregado.nome;
    this.email = empregado.email;
    this.telefone = empregado.telefone;
    this.empresa = empregado.empresa;
    this.funcao = empregado.funcao;
    this.salario = empregado.salario;
};

Empregado.create = function (newEmp, result){
    dbConn.query("INSERT INTO empregados SET ?", newEmp, function (err, res){
        if (err){
            console.log("Erro: ", err);
            result (err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Empregado.findById = function (id, result){
    dbConn.query("SELECT * FROM empregados WHERE ID = ?", id, function (err, res){
        if(err){
            console.log("Erro: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Empregado.findAll = function (result){
    dbConn.query("SELECT * FROM empregados", function (err, res){
        if (err){
            console.log("Erro: ", err);
            result(null, err);
        } else { 
            console.log("Empregados: ", res);
            result(null, res);
        }
    });
};

Empregado.update = function(id, empregado, result){
    dbConn.query("UPDATE empregados SET nome = ?, email = ?, telefone = ?, empresa = ?, funcao = ?, salario = ?", 
    [empregado.nome, empregado.email, empregado.telefone, empregado.empresa, empregado.funcao, empregado.salario],
    function (err, res){
        if(err){
            console.log("Erro: ", err);
            result(null, err);
        } else {
            result(null, res)
        }
    });
};

Empregado.delete = function(id, result){
    dbConn.query("DELETE FROM empregados WHERE id = ?", [id], function (err, res){
        if(err){
            console.log("Erro: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Empregado;