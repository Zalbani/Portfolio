$(function() {
	var menu = $(".menu-left");

	// On click on a link
	menu.on("click", "a.link", function() {
		menu.find("a.link").removeClass("selected");
		$(this).addClass("selected");
	});

	// On key down on a link
	menu.on("keydown", "a.link", function($event) {
		if ($event.keyCode == 13) {
			menu.find("a").removeClass("selected");
			$(this).addClass("selected");
		}
	});

	// On click on the show/hide btn
	menu.on("click", "div.btn-container", function() {
		menu.toggleClass("display");
	});

	// On key down on the show/hide btn
	menu.on("keydown", "div.btn-container", function($event) {
		if ($event.keyCode == 13) {
			menu.toggleClass("display");
		}
	});
	
	// To make the tootlip disappear from the DOM after the animation end
	var tooltip = document.getElementsByTagName('div.menu-left tooltip');
	tooltip.addEventListener('webkitAnimationEnd', function(event) { 
		tooltip.style.display = 'none'; 
	}, false);
});