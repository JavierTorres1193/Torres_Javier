const fs = require('fs');
let rawdata = fs.readFileSync('./personas.json');

/* El método JSON. stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
opcionalmente reemplaza valores si se indica una función de reemplazo,
o si se especifican las propiedades mediante un array de reemplazo.  */
console.log(JSON.stringify(rawdata));

/* El método JSON. parse() analiza una cadena de texto como JSON
transformando opcionalmente el valor producido por el análisis.*/
console.log(JSON.parse(rawdata));
