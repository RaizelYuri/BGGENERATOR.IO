var css = document.getElementById("css");
var inputHexValOne = document.getElementById("hexVColorOne");
var inputHexValTwo = document.getElementById("hexVColorTwo");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


color1.addEventListener("input", elementGradient);
color2.addEventListener("input", elementGradient);


function elementGradient(A,B) {
	body.style.background = 
	"linear-gradient(to right , " 
	+ color1.value 
	+ " , " 
	+ color2.value 
	+ ")";
	colorContent();
	getHexValColor();
} 

function getRamdomHexO(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i=0; i < 6; i++)
	 color += letters [Math.floor(Math.random() *16)]; {
		return color;
	}
}

function getRamdomHexT(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i=0; i < 6; i++)
	 color += letters [Math.floor(Math.random() *16)]; {
		return color;
	}
}



button.addEventListener("click", getRandomColor);

 
function getRandomColor(){
	var O = getRamdomHexO();
	var T = getRamdomHexT();
	body.style.background = 
	"linear-gradient(to right , " 
	+ O
	+ " , " 
	+ T 
	+ ")"; 
	colorContent();
	inputHexValOne.value = O;
	inputHexValTwo.value = T;
	color1.value = O;
	color2.value = T;
}



elementGradient(color1.value,color2.value);

function colorContent() {
	return css.textContent = body.style.background + ";";
}

function getHexValColor(){
	inputHexValOne.value = color1.value;
	inputHexValTwo.value = color2.value;
}






