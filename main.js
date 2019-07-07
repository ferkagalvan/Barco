
var arregloBarco;
var y_inicio = 10;
var x_inicio =700;


function crearBarco() {

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "#fff";
	context.fillRect(0,0,1000,1000);


	arregloBarco = new Array (

			new Barco( "brown", x_inicio, 10, 100, 70,"a",10),
			new Barco("red", 700, y_inicio, 100, 70,"b",20)
					
		);
	for (var i = arregloBarco.length - 1; i >= 0; i--) {
		arregloBarco[i].Dibujar(context);
	}
}





var id1;
var t = 0;

function iniciarAnimacion(){
	id1 = setInterval(
			animacion,
			42
		);
}
function animacion(){
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	arregloBarco.forEach(
		function(element) {
	  		element.X= x_inicio - (element.Velocidad*(t/1000));


	  		
		}
	);


	arregloBarco.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);

	t+=42;
}


function detenerAnimacion(){
	if(id1 != null)
		clearInterval(id1);
}
