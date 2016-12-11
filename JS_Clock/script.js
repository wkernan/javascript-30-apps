const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	if(secondsDegrees == 90 || minutesDegrees == 90 || hoursDegrees == 90) {
		secHand.className = 'hand-off sec-hand';
	} else {
		secHand.className = 'hand sec-hand';
	}
}

setInterval(setDate, 1000);