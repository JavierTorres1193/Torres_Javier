<script>
  
  function invertir (str) {
    if (str === "") {
        return "";
    } else {
        return invertir(str.substr(1)) + str.charAt(0);
    }
}

let invertirString = invertir("Ejercicio Silicon");
console.log(invertirString);
document.writeln(invertirString);

    </script>
