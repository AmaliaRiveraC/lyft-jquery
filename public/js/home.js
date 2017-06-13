var redirigir = function() {
  window.location.href = "codigo.html";
  console.log($(this));
};

var cargarPagina = function() {
  $("#signup").click(redirigir);
};



$(document).ready(cargarPagina);