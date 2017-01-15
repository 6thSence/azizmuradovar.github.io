var methods = document.querySelectorAll('.payment-method__item');
var forms = document.getElementsByTagName('form');
for (var method of methods) {
	method.addEventListener('click', function(event) {

		for (var i = methods.length - 1; i>= 0; i--) {
			methods[i].classList.remove('_active');
			forms[i].classList.remove('_active');
		};
		var elem = event.target;
		forms[elem.getAttribute('data')].classList.add('_active')
		elem.classList.add('_active')
	});
} ;