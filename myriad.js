document.getElementById('box').addEventListener('change', function() {
	    var icon = document.getElementById('icon');
	    if (this.checked) {
		icon.setAttribute('target', '_blank');
	    } else {
		icon.removeAttribute('target');
	    }
	});
