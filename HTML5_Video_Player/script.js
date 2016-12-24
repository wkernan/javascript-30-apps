const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function playPause() {
	if(video.paused) {
		toggle.innerHTML = '&#9612; &#9612;';
		video.play();
	} else {
		toggle.innerHTML = '►';
		video.pause();
	}
};

function setSlider() {
	console.log(this);
	if(this.name == 'volume') {
		video.volume = this.value;
	} else if(this.name == 'playbackRate') {
		video.playbackRate = this.value;	
	}
}

function skip() {
	let skip = parseInt(this.getAttribute('data-skip'),10);
	video.currentTime += skip;
};

function changeBar(e) {
	const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
	video.currentTime = scrubTime;
};

function showProgress() {
	progressBar.setAttribute('style', 'flex-basis:' + (video.currentTime/video.duration)*100 + '%');
	progressBar.style.width = (video.currentTime/video.duration)*100 + '%';
};

skipButtons.forEach((button) => {
	button.addEventListener('click', skip);
});
ranges.forEach((range) => {
	range.addEventListener('mouseup', setSlider);
});
video.addEventListener('click', playPause);
progress.addEventListener('click', changeBar);
toggle.addEventListener('click', playPause);
setInterval(showProgress,500);