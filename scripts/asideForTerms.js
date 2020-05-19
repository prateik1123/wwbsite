window.onscroll = function() {getPageYOffsetForTerms()};

const links = ['basic','trial', 'payment', 'termination', 'service', 'confidentiality', 'general'];
const asideTerms = document.getElementById("asideTerms");
let nextOffset = document.getElementById(links[1]).offsetTop;
let currentOffset = 240;

let l = 0;

function getPageYOffsetForTerms() {
	if (window.pageYOffset >= 240) {
		asideTerms.classList.add("sticky");
		if (  window.pageYOffset >= nextOffset ) {
			for ( let k = 0; k < links.length; k++ ) {
				document.getElementById('link' + links[k]).classList.remove("active");
			}

			if ( (l + 1) !== links.length ) {
				l++;
			}
			currentOffset = document.getElementById(links[l]).offsetTop;
			setClassForLink();
		} else if (  window.pageYOffset < currentOffset && window.pageYOffset > 240) {
			for ( let k = 0; k < links.length; k++ ) {
				document.getElementById('link' + links[k]).classList.remove("active");
			}

			if ( l !== 0 ) {
				l--;
				setClassForLink();
			} else {
				document.getElementById('link' + links[0]).classList.add("active");
			}
		}


	} else {
		asideTerms.classList.remove("sticky");
	}

}

function setClassForLink() {

	const link = document.getElementById('link' + links[l]);
	link.classList.add("active");
	const num = l;
	if ( num+1 !== links.length ) {
		const cord = document.getElementById(links[num + 1 ]).offsetTop;
		if ( cord) {
			nextOffset = cord;
		}
	}

}
