window.onscroll = function () {
	const header = document.querySelector('header');
	if ( window.pageYOffset > 60) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}

};
