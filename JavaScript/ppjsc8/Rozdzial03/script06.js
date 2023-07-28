window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
	if (document.getElementById) {
		for (var i=0; i<24; i++) {
			setSquare(i);
		}
	}
	else {
		alert("Przykro mi, ale Twoja przeglądarka nie jest w stanie obsłużyć tego skryptu");
	}
}

function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasis = colPlace[thisSquare] * 15;
	var newNum = colBasis + getNewNum() + 1;

	if (!usedNums[newNum]) {
		usedNums[newNum] = true;
		document.getElementById(currSquare).innerHTML = newNum;
	}
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}
