const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	const walk = 35;
	let x = e.offsetX;
	let y = e.offsetY;
	// compensate for child element reseting x & y to 0
	if(this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	let xWalk = Math.round((x / width * walk) - (walk / 2));
	let yWalk = Math.round((y / height * walk) - (walk / 2));

	// don't let bottom right go as far
	if(xWalk > 5) {
		xWalk = 5;
	}
	if(yWalk > 5) {
		yWalk = 5;
	}

	text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7)`;
}

hero.addEventListener('mousemove', shadow);