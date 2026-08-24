const botaoSolicitar = document.getElementById("btnSolicitar");

const modal = document.getElementById("modalAssistencia");

const botaoFechar = document.getElementById("btnFechar");


botaoSolicitar.addEventListener("click", function() {

    modal.style.display = "flex";

});


botaoFechar.addEventListener("click", function() {

    modal.style.display = "none";

});