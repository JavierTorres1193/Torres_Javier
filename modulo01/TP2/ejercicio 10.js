<script>
  
  function cantidadDias (mes, año) {

    return new Date ( año, mes, 0). getDate();
}

var mes = prompt ("Ingrese el mes del que quiera saber sus dias");
var año = prompt("Ingrese el año al que pertenece el mes")

console.log(cantidadDias(mes,año));

alert ( "El mes " + mes + " del año " + año + " tiene " + cantidadDias(mes,año) + " dias" );

</script>
