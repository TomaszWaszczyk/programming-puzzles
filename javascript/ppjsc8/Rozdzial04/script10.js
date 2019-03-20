window.onload = choosePic;

function choosePic() {
	var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg");
	var randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}
