/** @format */
export const mailValidation = () => {
	const mail = document.querySelector('#mail').value.trim();
	const errorMail = document.querySelector('#mail+p');

	const emptyMail = 'Email cannot be empty';
	const invalidMail = 'Enter a valid email';

	let isValid = false;
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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

	if (isValid) return mail;
};

export const nameValidation = () => {
	const nom = document.querySelector('#name').value.trim();
	const errorName = document.querySelector('#name+p');

	const emptyName = 'Name cannot be empty';
	const invalidName = 'Enter a valid name';

	let isValid = false;

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

	if (isValid) return nom;
};
