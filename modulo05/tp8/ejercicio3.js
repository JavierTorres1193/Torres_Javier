'use strict';
const fs = require('fs');
fs.readFile('personas.json', (err, data) => {
if (err) throw err;
// como los datos no están definidos, devuelve un array de numeros;
console.log(JSON.stringify(data));

// devuelve los datos sin conversión 
console.log(data);

});
