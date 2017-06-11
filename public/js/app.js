var redirigir = function () {
   window.location.href = "views/home.html";
 };

 var cargarPagina = function () {
   setTimeout(redirigir, 3000);
 };

 $(document).ready(cargarPagina);
