var redirigir = function() {
  window.location.href = "signout.html";
};

var cargarPagina = function() {
  $("#signup").click(redirigir);
};

var longitudTelefono = function() {
	var longitud = $("#telefono").val().length;
	if (longitud == 10) {
		return true;
	} else {
		return false;
	}
};

var validacion = function(evento) {
	if (longitudTelefono()) {
		$("#enviar").attr("href", "verify.html");
		$(this).removeClass("alerta");
	} else {
		$("#siguiente").removeAttr("href");
		$(this).addClass("alerta");
	}
};
  
		
		$(this).removeClass("alerta");
		localStorage.setItem("numCelular", $(this).val());
	} else {
		$("#siguiente").removeAttr("href");
		$(this).addClass("alerta");
	}
};

};
function validarFormTel() {
	if (inputTelefono.value.length == 8) {
		btnInputTelefono.disabled = true;
	}
	else {
		btnInputTelefono.disabled = false;
	}
}

$(document).ready(cargarPagina);