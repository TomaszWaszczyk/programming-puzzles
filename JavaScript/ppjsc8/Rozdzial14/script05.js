$(function(){			
	var stateList = "Dolnośląskie*Kujawsko-Pomorskie*Lubelskie*Lubuskie*Łódzkie*Małopolskie*Mazowieckie*Opolskie*Podkarpackie*Podlaskie*Pomorskie*Śląskie*Świętokrzyskie*Warmińsko-mazurskie*Wielkopolskie*Zachodniopomorskie*";				

	$("#searchField").autocomplete({
		source: stateList.split("*")
	});
});
