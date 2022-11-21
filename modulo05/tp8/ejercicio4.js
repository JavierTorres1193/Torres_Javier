const fs = require('fs');
const rawdata = fs.readFileSync('./personas.json');
var persona = JSON.parse(rawdata);

function getnombre (arreglo) {
    for (let i = 0; i <arreglo['Personas'].length;i++){

        let arreglos = arreglo['Personas'][i]['Localidad'];
        let nombre = arreglo['Personas'][i]['Nombre'];
        let apellido =arreglo['Personas'][i]['Apellido'];
  
        if (arreglos === 'Posadas'){
            console.log(nombre+ ' ' + apellido)
        }
    }
}
getnombre(persona);
