const modal = document.querySelectorAll(".modal-start");
const modalCheck = document.getElementsByClassName("modal-check");

function openModal() {
	modal[0].classList.add('is-active')
}

function closeModal() {
	modal[0].classList.remove('is-active')
}


function openModalCheck() {
	modalCheck[0].classList.add('is-active')
}

function closeModalCheck() {
	modalCheck[0].classList.remove('is-active')
}
