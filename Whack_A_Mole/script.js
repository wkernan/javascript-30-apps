const holes = document.querySelectorAll('.hole');
const scoreboard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max) {
	return Math.round(Math.random() * (max-min) + min);
}

function randHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];
	if(hole === lastHole) {
		console.log('same one bro');
		return randHole(holes);
	}
	lastHole = hole;
	return hole;
}

function peep() {
	const time = randTime(200, 1000);
	const hole = randHole(holes);
	console.log(time, hole);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');
		if(!timeUp) peep();
	}, time);
}

function startGame() {
	scoreboard.textContent = 0;
	timeUp = false;
	peep();
	setTimeout(() => timeUp = true, 10000);
}


function bonk(e) {
	if(!e.isTrusted) return; // cheater - isTrusted: false means user simulated click
	hole.classList.remove('up');
	scoreboard.textContent = score;
	score++;
}

moles.forEach((mole) => mole.addEventListener('click', bonk));