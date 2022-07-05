/** @format */

const displayformAccueil = () => {
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
					<input type="submit" value="Commencer" name="" id="commencer" />
				</form>
			</div>

    `;
};

const displayQuestion = () => {
	document.querySelector('main').innerHTML = `

    <div class="question-main">
				<div class="header">
					<p>
						Quel est le language de programation le plus utilisé dans
						le developpement web ?
					</p>
					<div>
						<div class="count">
							<span class="right">Question : 2/15</span>
							<span class="left"> 45</span>
						</div>
						<div class="range">
							<div></div>
						</div>
					</div>
				</div>
				<div class="answers">
					<label>
						<input name="answer" id="answer-3" type="radio" />
						<div></div>
						<p>credo</p>
					</label>
					<label>
						<input name="answer" id="answer-3" type="radio" />
						<div></div>
						<p>credo</p>
					</label>
					<label>
						<input name="answer" id="answer-3" type="radio" />
						<div></div>
						<p>credo</p>
					</label>
					<label>
						<input name="answer" id="answer-3" type="radio" />
						<div></div>
						<p>credo</p>
					</label>
				</div>
				<div class="footer">
					<input type="button" id="quitter" value="Quitter" />
					<input
						type="button"
						id="suivant"
						disabled
						value="Suivant"
					/>
				</div>
			</div>

    `;
};

const displayResult = () => {
	document.querySelector('main').innerHTML = `
    
    <div class="result-main">
				<div class="content">
					<h4>Thierry</h4>
					<p>bakerathierry@gmail.com</p>
					<div class="img"></div>
					<span>15/15</span>
					<input type="button" id="accueil" value="Accueil" />
				</div>
			</div>
    
    `;
};
