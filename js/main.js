function guardarInfo(){
	var nombre = document.getElementById("nombre").value;
	var comentario = document.getElementById("valor").value;
	sessionStorage.setItem(nombre,comentario);

	if (nombre == "" || nombre.length == 0 || /^\s+$/.test(nombre)){
		document.getElementById("nombre").classList.add("error");
		}
	if (comentario == "" || comentario.length == 0 || /^\s+$/.test(comentario)) {
		document.getElementById("valor").classList.add("error");
	}
	else {
		document.getElementById("nombre").classList.remove("error");
		document.getElementById("valor").classList.remove("error");
		for (var i = 0; i < sessionStorage.length; i++) {
		nombre = sessionStorage.key(i);
		comentario = sessionStorage.getItem(nombre);
		var contenedor = document.createElement("div");
		contenedor.classList.add("mostrar-comentario");

		var nombreUser = document.createElement("p");
			nombreUser.classList.add("nombre-user");
		var nombreValue = document.createTextNode(nombre);
			nombreUser.appendChild(nombreValue);

		var comentarioUser = document.createElement("h5");
			comentarioUser.classList.add("comentario-user");
		var comentarioValue = document.createTextNode(comentario);
			comentarioUser.appendChild(comentarioValue);

		var section = document.getElementById("comentarios");

		document.getElementById("nombre").value = "";
		document.getElementById("valor").value = "";
		}
		contenedor.appendChild(nombreUser);
		contenedor.appendChild(comentarioUser);
		section.appendChild(contenedor);
	}

}

var botonGuardar = document.getElementById("guardar");
	botonGuardar.addEventListener("click", guardarInfo);

var botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.addEventListener("click", function(event){
		event.preventDefault();
		sessionStorage.clear();
        window.location = window.location; // refresh
	})
/*
function imprimirComentario(){
	var contenedor = document.createElement("div");
		contenedor.classList.add(mostrarComentario);
	var nombreUser = document.createElement("h5");
		nombreUser.classList.add(nombreUser);
	var nombreValue = createTextNode(localStorage.nombre);
		nombreUser.appendChild(nombreValue);
	var comentarioUser = document.createElement("p");
		comentarioUser.classList.add(comentarioUser);
	var comentarioValue = createTextNode(localStorage.comentario);
		comentarioUser.appendChild(comentarioValue);
	var section = document.getElementById("comentarios");
	contenedor.appendChild(comentarioUser);
	contenedor.appendChild(nombreUser);
	section.appendChild("contenedor");
	if ((localStorage.nombre != undefined) && (localStorage.comentario != undefined)) {
			
		}else{
			document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
		}
}
var botonGuardar = document.getElementById("guardar");
	botonGuardar.addEventListener("click", guardarInfo);
var botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.addEventListener("click", function(){
		
	});*/