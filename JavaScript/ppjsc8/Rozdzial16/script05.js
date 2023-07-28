$(document).ready(function() {		
	$.getJSON(
		"http://twitter.com/statuses/user_timeline.json?screen_name=negrino&count=15&callback=?",
		function(data) {
			twitDataCallback(data);
		}
	);

	function twitDataCallback(twitData) {
		var userData = twitData[0].user;	
		var ct = "<div><img src='"+ userData.profile_image_url + "' alt='obraz z serwisu Twitter'>";
		ct += "<a href='http://www.twitter.com/" + userData.screen_name + "'>"
		ct += userData.name + "</a><br>Znajomi: " + userData.friends_count;
		ct += "<br>Osoby o podobnych zainteresowaniach: " + userData.followers_count;
		ct += "<br>Liczba list: " + userData.listed_count;
		ct += "<br>" + userData.description + "</div><br clear='all'>";
		$("#jstweets").append(ct);
		
		$.each(twitData, function(i, item) {
			ct = "<div class='twitline'>" + item.text;
			ct = ct.replace(/http:\/\/\S+/g, '<a href="$&">$&</a>');

			ct += " (<a class='tdate' href='http://www.twitter.com/";
			ct += userData.screen_name + "/status/" + item.id_str;
			ct += "'>" + item.created_at.substr(4,6) + "</a>)</div>";
			$("#jstweets").append(ct);
		});
	}
});
