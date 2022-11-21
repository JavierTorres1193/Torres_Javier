'use strict';
let jsonData = require('./personas.json');

/* El método JSON.stringify() devuelve todo el texto en formato json como
si fuera una cadena de texto */
console.log(JSON.stringify(jsonData));

/* En este caso al utilizar la linea de código json.parce devuelve un error
de sintaxis*/
console.log(JSON.parse(jsonData));
