const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
/* one way
const bandList = document.querySelector('#bands');

bands.sort((a,b) => {
	let aTitle = a.toLowerCase();
	let bTitle = b.toLowerCase();

	aTitle = removeArticle(aTitle);
	bTitle = removeArticle(bTitle);

	if(aTitle > bTitle) return 1;
	if(aTitle < bTitle) return -1;
	return 0 ;
});

function removeArticle(movie) {
	words = movie.toLowerCase().split(' ');
	if(words.length <= 1) return movie;
	if(words[0] == 'the' || words[0] == 'a' || words[0] == 'an') {
		words.shift();
	}
	return words.join('');
}
console.log(bands);

bandList.innerHTML = bands.map((band) => `<li>${band}</li>`).join('');
*/

// other way

function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1); 

document.querySelector('#bands').innerHTML = sortedBands.map((band) => {
	return `
		<li>${band}</li>
	`
}).join('');