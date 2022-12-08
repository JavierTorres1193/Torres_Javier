require("rootpath")();
const express = require('express');
const app = express();

const usuariosDb = require("../datasource/usuariosDB.js");

app.get('/', getAll);

app.post('/', create);

app.delete('/:idusuario', eliminacionlogica);

//metodo para traer todos los datos
function getAll(req, res) {
    usuariosDb.getAll(function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}


// Metodo para agregar personas
function create(req, res) {
    usuariosDb.create(req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}

// Metodo par eliminar personas cambiando el estado a 0
function eliminacionlogica(req, res) {
    usuariosDb.logdelete(req.params.idcurso, function (result) {
        if (result.code == 3) {
            res.status(500).send(err);
        } else if (result.code == 2) {
                res.status(404).json(result);  
        } else if (result.code == 1) {      
            res.json(result);
        }
    });
}

module.exports = app;
