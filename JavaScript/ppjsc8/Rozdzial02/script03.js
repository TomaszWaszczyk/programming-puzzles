/*
	Oto przykład długiego komentarza JavaScriptu. Proszę zwrócić uwagę na znaki na początku i na końcu komentarza.

	Niniejszy skrypt dodaje do dokumentu tekst "Witaj świecie!".
*/

window.onload = writeMessage;	// Funkcję wykonaj po załadowaniu strony

function writeMessage() {
	// Tutaj zaczyna się właściwa praca

	document.getElementById("helloMessage").innerHTML = "Witaj, świecie!";
}
