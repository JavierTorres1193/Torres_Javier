<script>

    var valores = ["verdadero", "false", 2, "hola",
      "mundo", 3, "char"];
    var numArray = [2, 3];

    for (i = 0; i < valores.length; i++) {
      var resultado = contar(valores[i])
      if (resultado >= 0) {
        console.log(valores[i] + " tiene " + resultado + " letras ")
      }

    }
    function contar(largoDePalabra) {
      return largoDePalabra.length
    }
    console.log("Los textos ordenados de mayor a menor son: " + valores.sort(function (a, b) { return b.length - a.length }));
    console.log(); ("3) ");
    for (let i = 0; i < numArray.length - 1; i++) {

      console.log("2 + 3 =", (numArray[i] + numArray[i + 1]));
      console.log("2 - 3 =", (numArray[i] - numArray[i + 1]));
      console.log("2 3 =", (numArray[i] * numArray[i + 1]));
      console.log("2 / 3 =", (numArray[i] / numArray[i + 1]));
    }





  </script>
