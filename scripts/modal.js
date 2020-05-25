const modal = document.querySelectorAll(".modal-start");
const modalCheck = document.getElementsByClassName("modal-check");
const html = document.querySelector('html');

function openModal() {
	modal[0].classList.add('is-active');
	html.classList.add('scroll-hidden');
}

function closeModal() {
	modal[0].classList.remove('is-active');
	html.classList.remove('scroll-hidden');
}


function openModalCheck() {
	modalCheck[0].classList.add('is-active');
	html.classList.add('scroll-hidden');
}

function closeModalCheck() {
	modalCheck[0].classList.remove('is-active');
	html.classList.remove('scroll-hidden');
}
