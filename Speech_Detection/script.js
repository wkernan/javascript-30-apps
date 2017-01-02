window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// recognition.continuous = true;
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
	const transcript = Array.from(e.results)
		.map((result) => result[0])
		.map((result) => result.transcript)
		.join('');

		if(transcript.includes('call Bill')) {
			console.log('calling Bill');
			window.open('tel:5125174258');
		}

		p.textContent = transcript;
		if(e.results[0].isFinal) {
			p = document.createElement('p');
			words.appendChild(p);
		}
})

recognition.addEventListener('end', recognition.start);

recognition.start();