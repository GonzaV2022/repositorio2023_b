<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    function calculo() {
        var cantidad = document.getElementById("cant").value;
        var descuento = document.getElementById("categ").value;
        var total = cantidad * (200 - ((200 * descuento)/100));
        document.getElementById(valorFinal).value = total;
    }
</script>
