var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.getElementById("player1"); 
	video.load(); 
	video.loop = false; 
	video.autoplay = false; 
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	changeVol(); 
	video.play(); 
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause(); 
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9; 
	console.log(video.playbackRate); 
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.11111; 
	console.log(video.playbackRate); 
});

document.querySelector("#skip").addEventListener("click", function() {
	let curTime = video.currentTime; 
	if (curTime + 10 > video.duration) 
		video.currentTime = 0; 
	else {
		video.currentTime += 10; 
	}
	console.log(video.currentTime); 
});

document.querySelector("#mute").addEventListener("click", function() {
	let muteBtn = document.getElementById("mute"); 
	if (video.muted) {
		video.muted = false; 
		muteBtn.innerHTML = "Mute"; 
	}
	else {
		video.muted = true; 
		muteBtn.innerHTML = "Unmute"; 
	}
});

function changeVol() {
	let volume = document.getElementById("slider").value; 
	video.volume = volume / 100;
	let vol = document.getElementById("volume"); 
	vol.innerHTML = volume + "%"; 
}

document.querySelector("#slider").addEventListener("change", changeVol);

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
