var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", elementGradient);
color2.addEventListener("input", elementGradient);


function elementGradient(a,b) {
	body.style.background = 
	"linear-gradient(to right , " 
	+ color1.value 
	+ " , " 
	+ color2.value 
	+ ")";

	colorContent();

} 

function getRamdomHex(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i=0; i < 6; i++)
	 color += letters [Math.floor(Math.random() *16)]; {
		return color;
	}
}



button.addEventListener("click", getRandomColor);



function getRandomColor(){
	body.style.background = 
	"linear-gradient(to right , " 
	+ getRamdomHex()
	+ " , " 
	+ getRamdomHex() 
	+ ")";
	
	colorContent(); 
}



elementGradient(color1.value,color2.value);

function colorContent() {
	return css.textContent = body.style.background + ";";
}