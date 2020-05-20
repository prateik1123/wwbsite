window.onscroll = function() {getPageYOffset()};

const asidePrivacy = document.querySelector("#asidePrivacy");
const linkwebsite = document.querySelector("#linkwebsite");
const website = document.querySelector("#website");
const linksoftware = document.querySelector("#linksoftware");

function getPageYOffset() {
	if (window.pageYOffset >= 225) {
		asidePrivacy.classList.add("sticky")
	} else {
		asidePrivacy.classList.remove("sticky");
	}

	if ( window.pageYOffset >=  website.offsetTop  ) {
		linkwebsite.classList.add("active");
		linksoftware.classList.remove("active");
	} else {
		linksoftware.classList.add("active");
		linkwebsite.classList.remove("active");
	}
	headerStyle();
}

function linkTo( link ) {
	const linkOffsetTop = document.getElementById(link).offsetTop  + 270;
	window.scrollTo(0 , linkOffsetTop);
}


function headerStyle() {
	const header = document.querySelector('header');

	if ( window.pageYOffset > 0) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
}
