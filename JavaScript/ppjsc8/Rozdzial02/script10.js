window.onload = initAll;

function initAll() {	
	var ans = prompt("Proszę wprowadzić liczbę","");
	try {
		if (!ans || isNaN(ans) || ans<0) {
			throw new Error("To nie jest prawidłowa liczba");
		}
		alert("Pierwiastek kwadratowy z " + ans + " wynosi " + Math.sqrt(ans));
	}
	catch (errMsg) {
		alert(errMsg.message);
	}
}