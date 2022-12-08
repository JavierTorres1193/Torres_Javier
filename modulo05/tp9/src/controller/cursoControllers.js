require("rootpath")();
const express = require('express');
const app = express();

const cursosDb = require("../datasource/cursosDB.js");


app.get('/', getAll);

//app.get('/:dni', getByDni);

app.post('/', create);

//app.put('/:dni', update);

//app.delete('/del/:dni', eliminar);

app.delete('/:idcurso', eliminacionlogica);


// Metododo para listar todos los cursos
function getAll(req, res) {
    cursosDb.getAll(function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}
/*
// Metodo para buscar personas por su dni
function getByDni(req, res) {
    personaDb.getByDni(req.params.dni,function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}*/

// Metodo para agregar personaas
function create(req, res) {
    cursosDb.create(req.body, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
}
/*
// Metodo para modificar personaas
function update(req, res) {
    personaDb.update(req.params.dni, req.body, function (result) {
        if (result.code == 3) {
            res.status(500).send(err);
        } else if (result.code == 2) {
            res.status(404).json(result);
        } else {
            res.json(result);
        }
    });
}
// Metodo par eliminar fisicmente personas de la base de datos
function eliminar(req, res) {
    personaDb.delete(req.params.dni,  function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.detail.affectedRows == 0) {
                res.status(404).json(result);
            } else {
                res.json(result);
            }
        }
    });
}
*/
// Metodo par eliminar personas cambiando el estado a 0
function eliminacionlogica(req, res) {
    cursosDb.logdelete(req.params.idcurso, function (result) {
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
