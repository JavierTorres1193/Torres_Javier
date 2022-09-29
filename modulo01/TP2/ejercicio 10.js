 <script>
   
   var notas;
        var suma = 0;
        var promedio;

        if (notas < 11) { }
        for (i = 1; i < 4; i++) {

            var notas = parseInt(prompt("Inserte la nota numero " + i))

            suma = suma + notas;

        }

        promedio = suma / 3;


        console.log("El promedio de las notas es " + promedio);
        alert("El promedio de las notas es " + promedio);


        if (promedio < 5) {
            alert("Usted reprobo la materia")
        } else if (promedio > 5 && promedio <= 8) {
            alert("Usted aprobo la materia")
        } else {
            alert("Su promedio ha sido sobresaliente ")
        }

    </script>
