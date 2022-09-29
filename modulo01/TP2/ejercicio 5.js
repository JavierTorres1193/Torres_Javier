<script>

function distingueLetras (argumentos) {
  // compruebo si el string es igual al string puesto en minúsculas
  if (argumentos === argumentos.toLowerCase()) {
    console.log('La palabra esta compuesta de minusculas');
  }
  // compruebo si el string es igual al string puesto en mayúsculas
  else if (argumentos === argumentos.toUpperCase()) {
    console.log('la esta compuesta de mayusculas');
  } else {
    var x = 0;
    var y = 0;

    // recorro el string
    for (var i = 0; i < argumentos.length; i++) {
      var charCode = argumentos[i].charCodeAt();

      // si pertenece a las mayúsculas
      if (charCode >= 65 && charCode <= 90) {
        x++;
      }
      // si pertenece a las minúsculas
      else if (charCode >= 97 && charCode <= 122) {
        y++;
      }
    }
    console.log(`la palabra esta compuesta de ${x} mayusculas y ${y} minusculas`)
  }

}

distingueLetras('practicas del silicon')
distingueLetras('PrActiCas DeL SilicoN')
distingueLetras('PRACTICAS DEL SILICON')

    </script>
