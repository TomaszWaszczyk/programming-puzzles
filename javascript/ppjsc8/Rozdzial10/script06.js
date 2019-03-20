window.onload = initAll;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = nodeChanger;
	chgNodes.init();
}

function nodeChanger() {
	return chgNodes.doAction();
}

var chgNodes = {
	actionType: function() {
		var radioButtonSet = document.getElementsByTagName("form")[0].nodeAction;
		for (var i=0; i<radioButtonSet.length; i++) {
			if (radioButtonSet[i].checked) {
				return i;
			}
		}
		return -1;
	},

	allGrafs: function() {
		return this.nodeChgArea.getElementsByTagName("p");
	},
	
	pGrafCt: function() {
		return this.allGrafs().length;
	},
	
	inText: function() {
		return document.getElementById("textArea").value;
	},
	
	newText: function() {
		return document.createTextNode(this.inText());
	},
	
	grafChoice: function() {
		return document.getElementById("grafCount").selectedIndex;
	},
	
	newGraf: function() {
		var myNewGraf = document.createElement("p");
		myNewGraf.appendChild(this.newText());
		return myNewGraf;
	},
	
	oldGraf: function () {
		return this.allGrafs().item(this.grafChoice());
	},

	doAction: function() {
		switch(this.actionType()) {
			case 0:
				this.nodeChgArea.appendChild(this.newGraf());
				break;
			case 1:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.removeChild(this.oldGraf());
					break;
				}
			case 2:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.insertBefore(this.newGraf(),this.oldGraf());
					break;
				}
			case 3:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.replaceChild(this.newGraf(),this.oldGraf());
					break;
				}
			default:
				alert("Nie wybrano prawidłowej operacji");
		}

		document.getElementById("grafCount").options.length = 0;

		for (var i=0; i<this.pGrafCt(); i++) {
			document.getElementById("grafCount").options[i] = new Option(i+1);
		}
		return false;
	},
	
	init: function() {
		this.nodeChgArea = document.getElementById("modifiable");
	}	
}