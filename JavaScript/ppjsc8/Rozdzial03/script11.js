var buzzwords = new Array ("Agregacja",	
	"Ajax",
	"API",
	"Przepustowość",
	"Beta",
	"Najnowocześniejsze",
	"Zgodność",
	"Wzorzec projektowy",
	"Nieprzerwany",
	"DRM",
	"Przedsiębiorstwo",
	"Przygotowania",
	"Ekonomia",
	"Framework",
	"Wpływ",
	"Innowacje",
	"Skryptowy",
	"Projekt",
	"Mikroformaty",
	"Mobilne",
	"Monetaryzacja",
	"Otwarte",
	"Paradygmat",
	"Podcast",
	"Proaktywne",
	"Rozwój",
	"Skalowalne",
	"Zakładki",
	"Społecznościowe",
	"Oprogramowanie",
	"Spam",
	"Synergia",
	"Znaczniki",
	"Zbieżność",
	"Prawda",
	"Generowane",
	"Blog",
	"Webinarium",
	"Wiki",
	"Przepływ"
);

var usedWords = new Array(buzzwords.length);
window.onload = initAll;

function initAll() {
	if (document.getElementById) {
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}
	else {
		alert("Przykro mi, ale Twoja przeglądarka nie jest w stanie obsłużyć tego skryptu");
	}
}

function newCard() {
	for (var i=0; i<24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	do {
		var randomWord = Math.floor((Math.random() * buzzwords.length));
	}
	while (usedWords[randomWord]);

	usedWords[randomWord] = true;
	var currSquare = "square" + thisSquare;
	document.getElementById(currSquare).innerHTML = buzzwords[randomWord];
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function anotherCard() {
	for (var i=0; i<buzzwords.length; i++) {
		usedWords[i] = false;
	}

	newCard();
	return false;
}

function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}
	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}
	else {
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

	for (var i=0; i<24; i++) {
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}

	for (var i=0; i<winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}
	
	if (winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (winners[winningOption] & Math.pow(2,i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
}