const divs = document.querySelectorAll('div');

function logText(e) {
	console.log(this.classList.value)
	e.stopPropagation(); // stop Bubbling
}

divs.forEach((div) => div.addEventListener('click', logText), {
	capture: false, // if set to true then run even top down, if false then bubble
	once: false // if true will unbind the event after being fired. Useful for store checkout button to stop users from clicking multiple times
});