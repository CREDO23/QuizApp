/** @format */
import { questionList } from './question.js';
import { mailValidation, nameValidation } from './utils.js';
import { displayQuestion } from './displayQuestion.js';

export function displayFormAccueil() {
	document.querySelector('main').innerHTML = `

    <div class="accueil-main">
				<div class="header">
					<h3>Javascript Quiz</h3>
					<p>
						Évaluez vos connaissances en JavaScript en répondant aux
						questions que nous avons spécialement sélectionnées pour
						vous. <br />
						C'est fun et c'est gratuit.
					</p>
				</div>
				<form>
					<div class="name">
						<label for="name">Nom*</label>
						<input type="text" name="" placeHolder="Minimum 3 caractères (required)" id="name" />
                        <p></p>
					</div>
					<div class="name">
						<label for="mail">Email*</label>
						<input type="mail"  placeHolder="xxxx@xxx.xxx (required)" name="" id="mail" />
                         <p></p>
					</div>
					<input type="button" value="Commencer" name="" id="commencer" />
				</form>
			</div>

    `;

	const accueilBtn = document.querySelector('#commencer');
	let indexQuestion = 0;
	let score = 0;
	let userName;
	let userMail;

	accueilBtn.addEventListener('click', () => {
		nameValidation();
		mailValidation();
		if (mailValidation() && nameValidation()) {
			userName = nameValidation();
			userMail = mailValidation();

			displayQuestion(
				userName,
				userMail,
				questionList[indexQuestion],
				indexQuestion,
				score,
			);
		}
	});
}
