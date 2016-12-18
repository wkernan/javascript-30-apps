const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('regular');
// Interpolated
console.log('This is an interpolated %s text', '💩'	);
// Styled
console.log('%cstyled text', 'font-size:30px;color:blue;');
// warning!
console.warn('Noooooo!');
// Error :|
console.error('Shit!');
// Info
console.info('The human head weighs 8 pounds');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('class'), 'that is not here');
// clearing
console.clear();
// Viewing DOM Elements
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`this is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`{$dog.name}`);
});
// counting

// timing	
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data');
		console.log(data);
	});