window.onscroll = function () {
	const header = document.querySelector('header');
	if ( window.pageYOffset > 60) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}

};

document.addEventListener('DOMContentLoaded', () => {

	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	if ($navbarBurgers.length > 0) {

		$navbarBurgers.forEach( el => {
			el.addEventListener('click', () => {

				const target = el.dataset.target;
				const $target = document.getElementById(target);

				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}

	const dropdownResources = document.querySelector('.dropdown-mobile-resources');
	const dropdownCompany = document.querySelector('.dropdown-mobile-company');

	dropdownResources.addEventListener('click', function(event) {
		event.stopPropagation();
		dropdownResources.classList.toggle('is-active');
	});

	dropdownCompany.addEventListener('click', function(event) {
		event.stopPropagation();
		dropdownCompany.classList.toggle('is-active');
	});

});


