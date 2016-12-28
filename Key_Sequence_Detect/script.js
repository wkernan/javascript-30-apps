const pressed = [];
const secretCode = 'kernan';

window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	console.log(pressed);
	if(pressed.join('').includes(secretCode)) {
		let heading = document.querySelector('h1');
		heading.style.textAlign = 'center';
		heading.style.fontSize = '64px';
		heading.innerHTML = 'You Win!';
		cornify_add();
	}
})