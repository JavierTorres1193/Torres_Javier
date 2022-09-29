<script>
  
  function numeros(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
for (i = 0; i < 100; i++){
console.log (numeros(1,100))
}



    </script>
    
