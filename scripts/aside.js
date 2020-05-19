window.onscroll = function() {myFunction()};

const asidePrivacy = document.getElementById("aside1");
const linkwebsite = document.getElementById("linkwebsite");
const website = document.getElementById("website");
const linksoftware = document.getElementById("linksoftware");

// Get the offset position of the navbar
const sticky = asidePrivacy.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= 240) {
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
}
