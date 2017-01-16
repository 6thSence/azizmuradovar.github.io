// Tab for payment-method
var methods = document.querySelectorAll('.payment-method__item');

var methodModule = (function() {
	var _init = function() {
		_eventListeners();
	};

	var _eventListeners = function() {
		for (var method of methods) {
			method.addEventListener('click', _setCurrentMethod);
		};
	};

	var _setCurrentMethod = function(event) {
		var elem = event.target;
		var forms = document.getElementsByTagName('form');

		for (var i = methods.length - 1; i>= 0; i--) {
			methods[i].classList.remove('_active');
			forms[i].classList.remove('_active');
		};

		forms[elem.getAttribute('data')].classList.add('_active');
		elem.classList.add('_active');
	};

	return {
		init: _init
	};
})();

methods && methodModule.init();

// Mask for input
$(document).ready(function(){
  $('#number-card').mask('0000 0000 0000 0000');
  $('#cvv').mask('000');
  });
