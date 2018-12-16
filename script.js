var css = document.querySelector("h3");
var css2 = document.createElement("h3");
document.body.appendChild(css2);
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

updateCss();

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function updateCss() {
	let newVal = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "background:" + newVal + ";";
	body.style.background = newVal;
	css2.textContent = "background:" + body.style.background + ";";
}

function randomColor() {
	return rgbToHex(Math.floor(Math.random()*255)
	,Math.floor(Math.random()*255)
	,Math.floor(Math.random()*255));
}

function generateRandomValues() {
	console.log("generateRandomValues");
	color1.value = randomColor();
	color2.value = randomColor();
	updateCss();
}


color1.addEventListener("input", updateCss);

color2.addEventListener("input", updateCss);

button.addEventListener("click", generateRandomValues);
