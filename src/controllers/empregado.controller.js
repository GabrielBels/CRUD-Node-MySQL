'use strict';

const Empregado = require('../model/empregado.model');

exports.findAll = function (req, res){
    Empregado.findAll(function(err, empregado){
        console.log("Controller");
        if(err){
            res.send(err);
        }
        console.log('res', empregado);
        res.send(empregado);
    });
};

exports.create = function(req, res){
    const new_empregado = new Empregado(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error: true, message: "Por favor, preencha todos os campos."});
    } else {
        Empregado.create(new_empregado, function (err, empregado){
            if(err){
                res.send(err);
            }
            res.json({error:false, message: "Empregado adicionado com sucesso.", data: empregado});
        });
    }
};

exports.findById = function(req, res){
    Empregado.findById(req.params.id, function(err, empregado){
        if(err){
            res.send(err);
        }
        res.json(empregado);
    });
};

exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message: "Por favor, preencha todos os campos."});
    } else {
        Empregado.update(req.params.id, new Empregado(req.body), function(err, empregado){
            if(err){
                res.send(err);
            }
                res.json({error:false, message: "Empregado atualizado com sucesso."});
        });
    }
};

exports.delete = function(req, res){
    Empregado.delete(req.params.id, function(err, empregado){
        if(err){
            res.send(err);
        }
        res.json({error:false, message:"Empregado deletado com sucesso."});
    });
};