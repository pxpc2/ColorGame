var numSqr = 6;
var colors = [];
var pickedColor; ;
var squares = document.querySelectorAll(".square");
var display = document.getElementById("displ");
var msg = document.getElementById("msg");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("refresh");
var modes = document.querySelectorAll(".mode");

init();

function init() {
	setUpModes();
	setUpSquares();
	restart();
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				msg.textContent = "Correct!"
				newColors.textContent = "Play Again?"
				changeColors(pickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				msg.textContent = "Try again"
			}
		});
	}
}

function setUpModes() {
	for (var i = 0; i < modes.length; i++) {
		var btn = modes[i];
		btn.addEventListener("click", function() {
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSqr = 3 : numSqr = 6;
			restart();
		});
	}
}

function restart() {
	colors = genColors(numSqr);
	pickedColor = randomize();
	display.textContent = pickedColor;
	updateColors();
	h1.style.backgroundColor = "steelblue";
	newColors.textContent = "New Colors"
	msg.textContent = "";
}

newColors.addEventListener("click", restart);


function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function randomize() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genColors(number) {
	var arr = [];
	for (var i = 0; i < number; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var R = Math.floor(Math.random() * 256);
	var G = Math.floor(Math.random() * 256);
	var B = Math.floor(Math.random() * 256);
	return "rgb(" + R + ", " + G + ", " + B + ")";
}

function updateColors() {
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
	}
}
