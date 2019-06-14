function openmenu() {
	var nav = document.getElementById('nav');
	nav.classList.toggle("menu-open");
	
	var menu = document.getElementById('menu');
	menu.classList.toggle("menu__open");
}


var back = document.getElementById('slide-back');
var next = document.getElementById('slide-next');
var background = document.getElementById('header');
var i = 1;

back.onclick = function back_slide() {
	i--;
	if (i<=0) {
		i = 3;
	}
	background.style.backgroundImage = "url('images/slider-bg/img" + i + ".png')";
}

next.onclick = function next_slide() {
	i++;
	if (i >= 4) {
		i = 1;
	}
	background.style.backgroundImage = "url('images/slider-bg/img" + i + ".png')";
}