function validar()
{
	var titulo=document.getElementById("titulo")
	if(titulo.value.length<4)
	{
		alert("El nombre debe de tener 4 o más caracteres")
		document.getElementById("titulo").style.backgroundColor="red"
	}
}
var lista_pelicula=["Ciencia Ficción", "Comedia", "Drama"];
function array()
{
	var objeto_select=document.getElementById("pelicula");
	for(i=0; i<lista_pelicula.length; i++)
	{
	var obj_option=document.createElement("option");
	obj_option.innerHTML=lista_pelicula[i];
	objeto_select.appendChild(obj_option);
	}
}
function temiroytevalido()
{
	var titulo=document.getElementById("titulo").value;
	var pelicula=document.getElementById("pelicula").value;
	alert("Usted ha elegido " +titulo+ " para ver de genero " +pelicula);
}