const mysql = require('mysql');
const config = require("../config/config.json");

//conectarnos a nuestra DB
var connection = mysql.createConnection(config.database);

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB Conectada correctamente");
    }
});

//fin de conexion db

var sedesDb = {};


sedesDb.getAll = function (funCallback) {
    connection.query("SELECT * FROM sedes where estado >=1", function (err, result, fields) {
        if (err) {
            funCallback({
                message: "Surgio un problema, contactese con un administrador. Gracias",
                detail: err
            });
            console.error(err);
        } else {
            funCallback(undefined, result);
        }
    });
}


sedesDb.create = function (sedes, funCallback) {
    var query = 'INSERT INTO sedes (idsedes,nombre,dirrecion,localidad, cod_postal, telcontacto1, telcontacto2) VALUES (?,?,?,?,?,?,?)'
    var dbParams = [sedes.idsedes, sedes.nombre, sedes.direccion, sedes.localidad,sedes.cod_postal,sedes.telcontacto1,sedes.telcontacto2];
    connection.query(query, dbParams, function (err, result, fields) {
        if (err) {
            if(err.code == 'ER_DUP_ENTRY'){
                funCallback({
                    message: `Ya existe la sede ${sedes.nombre}`,
                    detail: err
                });
            }else{
                funCallback({
                    message: "Surgio un problema, contactese con un administrador. Gracias",
                    detail: err
                });
            }
            
            console.error(err);
        } else {
            funCallback(undefined, {
                message: `Se creo la sede ${sedes.nombre}`,
                detail: result
            });
        }
    });
}

sedesDb.logdelete = function (idsedes, funCallback) {
    connection.query("UPDATE sedes SET estado = 0 WHERE idsedes = ?",idsedes, function (err, result, fields) {
        if (err) {
            funCallback({
                code:3,
                message: "Surgio un problema, contactese con un administrador. Gracias",
                detail: err
            }); 
            console.error(err);
        } else {
            if (result.affectedRows == 0) {
                funCallback({
                    code:2,
                    message: `No se encontro el id  ${idsedes} de la sede`,
                    detail: result
                }); 
            } else {
         //       console.error(err);
                    funCallback({
                    code:1,
                    message: `Se modifico la sede con el id ${idsedes}`,
                    detail: result
                }); 
            }
        }
    });
}

module.exports = sedesDb;
