document.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		alert('Esc key pressed.');
	}
};