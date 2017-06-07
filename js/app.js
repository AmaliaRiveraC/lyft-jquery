var redirigir = function () {
   window.location.href = "views/home.html";
 };

 var cargarPagina = function () {
   setTimeout(redirigir, 1000);
 };

 $(document).ready(cargarPagina);
