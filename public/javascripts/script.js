document.addEventListener('DOMContentLoaded', function(event) {
	var checkboxex = document.getElementsByTagName('input');
	for (var i = 0; i< checkboxex.length; i++) {
		checkboxex[i].addEventListener('click', clickHandler);
	}
});

function clickHandler() {
	if (this.checked) {
		this.parentNode.className = 'checked';
	} else {
		this.parentNode.className= '';
	}
}