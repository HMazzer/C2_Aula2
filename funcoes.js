
function soma (){
var x=1;
var y=2;
console.log (x+2);
}

//soma();


function somaPar(x, y){
	var r = x+y;
	console.log(r);
}

function mult(n, o) {
	var resultado = (n * o); //vars locais
	console.log(resultado)
}

function pot (n, o){
	var resultado = Math.pow(n, o);
	console.log(resultado);
}

mult(3, 4);
pot(7, 2);

//somaPar(4, 9);

/*(function respostaF(){
	var nome="Helen";
	return nome;
}) ();*/

var f = function(){
	alert("Função sem nome");
}

// f();
//var d = respostaF();

//var ar = ()=>{ alert("ArcFunc")}
//ar();

//( ()=>{alert ("ArFunc")}) ()













