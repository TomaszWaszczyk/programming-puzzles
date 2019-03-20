window.onload = initForm;

function initForm() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].readOnly) {
			allTags[i].onfocus = function() {
				this.blur();
			}
		}
	}
}
