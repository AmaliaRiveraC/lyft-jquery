var redirigir = function() {
  window.location.href = "signout.html";
};

var cargarPagina = function() {
  $("#signup").click(redirigir);
};

$(document).ready(cargarPagina);