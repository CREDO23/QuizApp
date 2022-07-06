/** @format */
import { questionList } from './question.js';
import { displayResult } from './diplayResult.js';
import { displayFormAccueil } from './displayFormAccueil.js';

export function displayQuestion(
	userName,
	userMail,
	question,
	indexQuestion,
	score,
) {
	let i = indexQuestion + 1;
	let j = score;
	let count = 60;
	let uN = userName;
	let uM = userMail;

	document.querySelector('main').innerHTML = `

    <div class="question-main">
				<div class="header">
					<p>
						${question.question}
					</p>
					<div>
						<div class="count">
							<span class="right">Question : ${i}/15</span>
							<span class="left">${count}</span>
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

	const choices = document.querySelectorAll('input[type="radio"]');
	const nextBtn = document.querySelector('#suivant');
	const leaveBtn = document.querySelector('#quitter');
	let tabChoice = [];

	let countSecondsFunction = () => {
		count--;
		document.querySelector('.left').textContent = count;
		if (count == 0) {
			clearInterval(myInnterval);
			questionList.indexOf(question) < questionList.length - 1
				? displayQuestion(uN, uM, questionList[i], i, j)
				: displayResult(uN, uM, j);
		}
	};

	let myInnterval = setInterval(countSecondsFunction, 1000);

	choices.forEach((btn) => {
		tabChoice.push(btn);
		btn.addEventListener('click', () => {
			tabChoice.some((btn) => btn.checked)
				? (nextBtn.disabled = false)
				: nextBtn;
		});
	});

	leaveBtn.addEventListener('click', () => {
		clearInterval(myInnterval);
		choices.forEach((btn) => {
			if (btn.checked) {
				question.rightAnswer ==
				document.querySelector(`#${btn.id}+div+p`).textContent
					? j++
					: btn;
			}
		});
		displayResult(uN, uM, j);
	});

	if (questionList.indexOf(question) < questionList.length - 1) {
		nextBtn.addEventListener('click', () => {
			choices.forEach((btn) => {
				btn.checked
					? question.rightAnswer ==
					  document.querySelector(`#${btn.id}+div+p`).textContent
						? j++
						: btn
					: btn;
			});
			clearInterval(myInnterval);
			displayQuestion(uN, uM, questionList[i], i, j);
		});
	} else {
		nextBtn.value = 'Terminer';
		nextBtn.addEventListener('click', () => {
			choices.forEach((btn) => {
				btn.checked
					? question.rightAnswer ==
					  document.querySelector(`#${btn.id}+div+p`).textContent
						? j++
						: btn
					: btn;
			});
			clearInterval(myInnterval);
			displayResult(uN, uM, j);
		});
	}
}
