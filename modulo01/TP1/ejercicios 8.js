<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script>
let val1, val2, num1, num2;
val1 = window.prompt("Introduce primer número ?", "0");
num1 = parseInt(val1); // El método parseInt analiza un valor como una cadena y devuelve el primer entero.
https://www.w3schools.com/jsref/jsref_parseint.asp
val2 = window.prompt("Introduce segundo número ?", "0");
num2 = parseInt(val2);
let resultado = num1 + num2;
document.write(`<br/> <br/> La suma es ${resultado} ` );
</script>
<p>Para sumar, las variables deben ser numéricas.</p>
</body>
</html>
