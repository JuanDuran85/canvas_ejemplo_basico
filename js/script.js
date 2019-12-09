//iniciando el canvas
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

//iniciando variables del entorno
let posicion = 0;
let tamano = 0;

//intervalo de tiempo para dibujar y animar la figura
setInterval(function () {
	context.clearRect(0,0,400,400);
	context.fillRect(posicion,0,tamano,tamano);

	posicion++;
	tamano++;

	if (posicion>400) {
		posicion = 0;
		tamano = 0
		context.fillStyle = "Red";
	};
}, 30);