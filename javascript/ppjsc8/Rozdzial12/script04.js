window.onload = initAll;

var currImg = 0;
var captionText = [
	"Nasz statek wypływa z Vancouver.",
	"W pierwszym porcie - Juneau - polecieliśmy sobie helikopterem.",
	"Helikopter zabrał nas na lodowiec Mendenhall.",
	"Szczęśliwa para na lodowcu.",
	"A tak wyglądało ze statku drugie miasteczko, w którym cumowaliśmy - Ketchikan.",
	"Popłynęliśmy sobie przez zatokę Glacier Bay. To było naprawdę niesamowite!",
	"W Skagway wsiedliśmy do pociągu, który zawiózł nas w góry, aż do granicy kanadyjskiej.",
	"Widok na Skagway z odjeżdżającego pociągu.",
	"Na tak romantycznej wycieczce zaręczynom nie można się dziwić, a ja i tak byłam zaskoczona (oczywiście, że powiedziałam 'Tak').",
	"Na wakacjach jest bardzo miło, ale wrócić do domu, to również przyjemność."
];

function initAll() {
	document.getElementById("imgText").innerHTML = captionText[0];
	document.getElementById("prevLink").onclick = function() {
		newSlide(-1);
	}
	document.getElementById("nextLink").onclick = function() {
		newSlide(1);
	}
}

function newSlide(direction) {
	var imgCt = captionText.length;

	currImg = currImg + direction;
	if (currImg < 0) {
		currImg = imgCt-1;
	}
	if (currImg == imgCt) {
		currImg = 0;
	}
	document.getElementById("slideshow").src = "images/slideImg" + currImg + ".jpg";
	document.getElementById("imgText").innerHTML = captionText[currImg];
}
