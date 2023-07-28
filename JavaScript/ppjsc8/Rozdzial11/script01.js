window.onload = initDate;

function initDate() {
	var dayName = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
	var monName = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
	
	var now = new Date();
	var dtString = dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate();

	document.getElementById("dtField").innerHTML = dtString;
}

