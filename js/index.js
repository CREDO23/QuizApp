/** @format */
import { questionList } from './question.js';
import { mailValidation, nameValidation } from './utils.js';

displayformAccueil();

export function displayformAccueil() {
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
						<input type="text" name="" id="name" />
                        <p></p>
					</div>
					<div class="name">
						<label for="mail">Email*</label>
						<input type="mail" name="" id="mail" />
                         <p></p>
					</div>
					<input type="button" value="Commencer" name="" id="commencer" />
				</form>
			</div>

    `;

	const accueilBtn = document.querySelector('#commencer');
	let i = 0;
	let score = 0;
	let userName;
	let userMail;

	accueilBtn.addEventListener('click', () => {
		nameValidation();
		mailValidation();
		if (mailValidation() && nameValidation()) {
			userName = nameValidation();
			userMail = mailValidation();

			displayQuestion(userName, userMail, questionList[i], i, score);
		}
	});
}

export function displayQuestion(
	userName,
	userMail,
	question,
	indexQuestion,
	score,
) {
	let i = indexQuestion + 1;
	let j = score;
	let uN = userName;
	let uM = userMail;

	document.querySelector('main').innerHTML = `

    <div class="question-main">
				<div class="header">
					<p>
						'${question.question}'
					</p>
					<div>
						<div class="count">
							<span class="right">Question : ${i}/15</span>
							<span class="left"> 45</span>
						</div>
						<div class="range">
							<div></div>
						</div>
					</div>
				</div>
				<div class="answers">
					<label>
                        <input name="answer" value="${question.answer1}" id="answer-1" type="radio" />
						<div></div>
						<p>${question.answer1}</p>
					</label>
					<label>
                        <input name="answer" value="${question.answer2}" id="answer-2" type="radio" />
						<div></div>
						<p>${question.answer2}</p>
					</label>
					<label>
                        <input name="answer" value="${question.answer3}" id="answer-3" type="radio" />
						<div></div>
						<p>${question.answer3}</p>
					</label>
					<label>
                        <input name="answer" value="${question.answer4}" id="answer-4" type="radio" />
						<div></div>
						<p>${question.answer4}</p>
					</label>
				</div>
				<div class="footer">
					<input type="button" id="quitter" value="Quitter" />
					<input
						type="button"
						id="suivant"
						disabled
						value='Suivant'
					/>
				</div>
			</div>

    `;

	const choice = document.querySelectorAll('input[type="radio"]');
	const nextBtn = document.querySelector('#suivant');
	const leaveBtn = document.querySelector('#quitter');
	let tabChoice = [];

	choice.forEach((btn) => {
		tabChoice.push(btn);
		btn.addEventListener('click', () => {
			tabChoice.some((btn) => btn.checked)
				? (nextBtn.disabled = false)
				: nextBtn;
		});
	});

	leaveBtn.addEventListener('click', () => displayformAccueil());

	if (questionList.indexOf(question) < questionList.length - 1) {
		nextBtn.addEventListener('click', () => {
			choice.forEach((btn) => {
				btn.checked
					? question.rightAnswer ==
					  document.querySelector(`#${btn.id}+div+p`).textContent
						? j++
						: btn
					: btn;
			});
			displayQuestion(uN, uM, questionList[i], i, j);
		});
	} else {
		nextBtn.value = 'Terminer';
		nextBtn.addEventListener('click', () => {
			choice.forEach((btn) => {
				btn.checked
					? question.rightAnswer ==
					  document.querySelector(`#${btn.id}+div+p`).textContent
						? j++
						: btn
					: btn;
			});
			displayResult(uN, uM, j);
		});
	}
}

function displayResult(nom, mail, score) {
	document.querySelector('main').innerHTML = `
    
    <div class="result-main">
				<div class="content">
					<h4>${nom}</h4>
					<p>${mail}</p>
					<div id="img"> </div>
					<span>${score}/15</span>
					<input type="button" id="accueil" value="Accueil" />
				</div>
			</div>
    
    `;

	const img = document.querySelector('#img');
	const accueilBtn = document.querySelector('#accueil');

	accueilBtn.addEventListener('click', () => displayformAccueil());

	if (score <= 7) {
		img.innerHTML = `
        <svg width="174" height="174" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M116.464 60.2891C116.464 59.5414 115.852 58.9297 115.105 58.9297L103.89 58.9807L86.9996 79.1164L70.1264 58.9977L58.8945 58.9467C58.1469 58.9467 57.5352 59.5414 57.5352 60.3061C57.5352 60.6289 57.6541 60.9348 57.858 61.1897L79.9648 87.5275L57.858 113.848C57.6527 114.097 57.5388 114.409 57.5352 114.732C57.5352 115.48 58.1469 116.091 58.8945 116.091L70.1264 116.04L86.9996 95.9047L103.873 116.023L115.088 116.074C115.835 116.074 116.447 115.48 116.447 114.715C116.447 114.392 116.328 114.086 116.124 113.831L94.0514 87.5105L116.158 61.1727C116.362 60.9348 116.464 60.6119 116.464 60.2891Z" fill="#FF3838"/>
<path d="M87 11.0469C44.9613 11.0469 10.875 45.1332 10.875 87.1719C10.875 129.211 44.9613 163.297 87 163.297C129.039 163.297 163.125 129.211 163.125 87.1719C163.125 45.1332 129.039 11.0469 87 11.0469ZM87 150.383C52.098 150.383 23.7891 122.074 23.7891 87.1719C23.7891 52.2699 52.098 23.9609 87 23.9609C121.902 23.9609 150.211 52.2699 150.211 87.1719C150.211 122.074 121.902 150.383 87 150.383Z" fill="#FF3838"/>
</svg>

        `;
	} else {
		img.innerHTML = `
        <svg width="174" height="174" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M118.776 59.9844H110.806C109.073 59.9844 107.425 60.817 106.405 62.2443L79.6936 99.2873L67.5951 82.499C66.5756 81.0887 64.9443 80.2391 63.1941 80.2391H55.2248C54.1203 80.2391 53.4746 81.4965 54.1203 82.3971L75.2926 111.76C75.7927 112.458 76.4521 113.026 77.216 113.419C77.9799 113.811 78.8263 114.016 79.6851 114.016C80.5438 114.016 81.3903 113.811 82.1541 113.419C82.918 113.026 83.5774 112.458 84.0775 111.76L119.863 62.1424C120.526 61.2418 119.88 59.9844 118.776 59.9844V59.9844Z" fill="#028A3D"/>
<path d="M87 10.875C44.9613 10.875 10.875 44.9613 10.875 87C10.875 129.039 44.9613 163.125 87 163.125C129.039 163.125 163.125 129.039 163.125 87C163.125 44.9613 129.039 10.875 87 10.875ZM87 150.211C52.098 150.211 23.7891 121.902 23.7891 87C23.7891 52.098 52.098 23.7891 87 23.7891C121.902 23.7891 150.211 52.098 150.211 87C150.211 121.902 121.902 150.211 87 150.211Z" fill="#028A3D"/>
</svg>

        `;
	}
}
