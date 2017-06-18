/*aquí va tu código*/
function guardarInfo(){
	localStorage.nombre = document.getElementById("nombre").value;
	localStorage.comentario = document.getElementById("valor").value;

	if ((sessionStorage.nombre != "") && (sessionStorage.comentario != "")) {
		for (var i = 0; i < sessionStorage.length; i++) {
		var nombre = sessionStorage.key(i);
		var comentario = sessionStorage.getItem(nombre);
		console.log(nombre);
		var contenedor = document.createElement("div");
		contenedor.classList.add("mostrar-comentario");

		var nombreUser = document.createElement("h5");
			nombreUser.classList.add("nombreUser");
		var nombreValue = document.createTextNode(nombre);
			nombreUser.appendChild(nombreValue);

		var comentarioUser = document.createElement("p");
			comentarioUser.classList.add("comentario-user");
		var comentarioValue = document.createTextNode(comentario);
			comentarioUser.appendChild(comentarioValue);

		var section = document.getElementById("comentarios");

		contenedor.appendChild(nombreUser);
		contenedor.appendChild(comentarioUser);
		section.appendChild(contenedor);
	
		}
	}else{
			alert("nop");
		}

}

var botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.addEventListener("click", function(){
		sessionStorage.clear();
	})

var botonGuardar = document.getElementById("guardar");
	botonGuardar.addEventListener("click", guardarInfo);
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