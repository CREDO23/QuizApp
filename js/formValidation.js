/** @format */

const nom = document.querySelector('#name');
const mail = document.querySelector('#mail');

const errorName = document.querySelector('#name+p');
const errorMail = document.querySelector('#mail+p');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const emptyName = 'Name cannot be empty';
const invalidName = 'Enter a valid name';
const emptyMail = 'Email cannot be empty';
const invalidMail = 'Enter a valid email';

const mailValidation = (value) => {
	let isValid = false;
	let mail = value.value.trim();
	if (mail != '') {
		if (emailRegex.test(mail)) {
			errorMail.textContent = '';
			errorMail.parentElement.classList.remove('error');
			isValid = true;
		} else {
			errorMail.textContent = invalidMail;
			errorMail.parentElement.classList.add('error');
		}
	} else {
		errorMail.textContent = emptyMail;
		errorMail.parentElement.classList.add('error');
	}

	return isValid;
};

const nameValidation = (value) => {
	let isValid = false;
	let nom = value.value.trim();
	if (nom != '') {
		if (nom.length < 3) {
			errorName.textContent = invalidName;
			errorName.parentElement.classList.add('error');
		} else {
			errorName.textContent = '';
			errorName.parentElement.classList.remove('error');
			isValid = true;
		}
	} else {
		errorName.textContent = emptyName;
		errorName.parentElement.classList.add('error');
	}

	return isValid;
};
