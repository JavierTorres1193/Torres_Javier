const fs = require('fs');
const rawdata = fs.readFileSync('./departamentos.json','utf8');
var empleado = JSON.parse(rawdata);

function getEmpleado (arreglo) {
    for (let i = 0; i <arreglo['Tecnologia'].length; i++)
        console.log(arreglo['Tecnologia'][i]['nombre']+' '+ arreglo['Tecnologia'] [i] ['puesto']);
        }
getEmpleado(empleado);
