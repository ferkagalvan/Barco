class Barco {
	constructor(co,x,y,an,al,pu,ve){
		this.color = co;
		this.X = x;
		this.Y = y;
		this.ancho = an;
		this.Altura = al;
		this.Puntos =pu;
		this.Velocidad=ve
		
		
	
	}
	
	Dibujar(context){
		

		context.beginPath();
		context.fillStyle = this.color;
		context.moveTo(this.X, this.Y+this.Altura);
		context.lineTo(this.X+this.ancho*1/4, this.Altura+this.Y+this.Altura/2);
		context.lineTo(this.X+(this.ancho*Math.cos(20))+this.ancho,this.Altura+5+this.Y+(this.Altura*Math.cos(20)));
		context.lineTo(this.X+60+this.ancho, this.Y-1+this.Altura);
		context.closePath();
		context.fill();


		//var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) ); 
		//var a = x1 - x2 var b = y1 - y2 var c = Math.sqrt( a*a + b*b ); // c is the distance 

	}
}
