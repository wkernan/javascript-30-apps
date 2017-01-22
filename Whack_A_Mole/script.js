const holes = document.querySelectorAll('.hole');
const scoreboard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function debounce(func, wait = 175, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if(!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if(callNow) func.apply(context, args);
	};
};

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
	score = 0;
	scoreboard.textContent = 0;
	timeUp = false;
	peep();
	setTimeout(() => timeUp = true, 10000);
}


function bonk(e) {
	console.log(e);
	if(!e.isTrusted) return; // cheater - isTrusted: false means user simulated click
	score++;
	console.log(this.parentNode);
	this.parentNode.classList.remove('up');
	scoreboard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener('click', debounce(bonk)));