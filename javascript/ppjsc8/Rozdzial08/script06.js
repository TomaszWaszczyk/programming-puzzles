document.onmousemove = moveHandler;

function moveHandler(evt) {
	if (!evt) {
		evt = window.event;
	}
	animateEyes(evt.clientX, evt.clientY);
}

function animateEyes(xPos,yPos) {
	var rightEye = document.getElementById("rEye");
	var leftEye = document.getElementById("lEye");
	var rightEyeball = document.getElementById("rDot").style;
	var leftEyeball = document.getElementById("lDot").style;

	leftEyeball.left = newEyeballPos(xPos, leftEye.offsetLeft);
	leftEyeball.top = newEyeballPos(yPos, leftEye.offsetTop);
	rightEyeball.left = newEyeballPos(xPos, rightEye.offsetLeft);
	rightEyeball.top = newEyeballPos(yPos, rightEye.offsetTop);

	function newEyeballPos(currPos,eyePos) {
		return Math.min(Math.max(currPos,eyePos+3), eyePos+17) + "px";
	}
}
