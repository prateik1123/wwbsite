window.onscroll = function() {getPageYOffsetForTerms()};

const links = ['basic','trial', 'payment', 'termination', 'service', 'confidentiality', 'general'];
const asideTerms = document.querySelector("#asideTerms");
let nextOffset = document.getElementById(links[1]).offsetTop;
let currentOffset = 225;

let l = 0;

function getPageYOffsetForTerms() {
	if (window.pageYOffset >= 225) {
		asideTerms.classList.add("sticky");
		if (  window.pageYOffset > nextOffset ) {
			for ( let k = 0; k < links.length; k++ ) {
				document.querySelector('#link' + links[k]).classList.remove("active");
			}

			if ( (l + 1) !== links.length ) {
				l++;
			}
			currentOffset = document.getElementById(links[l]).offsetTop;
			setClassForLink();
		} else if (  window.pageYOffset < currentOffset && window.pageYOffset > 225) {
			for ( let k = 0; k < links.length; k++ ) {
				document.querySelector('#link' + links[k]).classList.remove("active");
			}

			if ( l !== 0 ) {
				l--;
				setClassForLink();
			} else {
				document.querySelector('#link' + links[0]).classList.add("active");
			}
		}
	} else {
		asideTerms.classList.remove("sticky");
	}

	headerStyle();
}

function setClassForLink() {

	const link = document.querySelector('#link' + links[l]);
	link.classList.add("active");
	const num = l;
	if ( num+1 !== links.length ) {
		const cord = document.getElementById(links[num + 1 ]).offsetTop;
		if ( cord) {
			nextOffset = cord;
		}
	}
}

function linkTo( link ) {
	const linkOffsetTop = document.getElementById(link).offsetTop  + 215;
	window.scrollTo(0 , linkOffsetTop);

	setTimeout(() => {
		for ( let k = 0; k < links.length; k++ ) {
			document.querySelector('#link' + links[k]).classList.remove("active");
		}
		document.querySelector('#link' + link).classList.add("active");
	})

}


function headerStyle() {
	const header = document.querySelector('header');

	if ( window.pageYOffset > 0) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
}
