const musicURL = "https://www.tlu.ee/~nkdsnake/kodutoo1/rdr2.mp3";
let music = new Audio();


function initMusic(){
    console.log('initiatd music file');
	music.addEventListener("canplaythrough", preparePlay);
	music.src = musicURL;
}

function toggleMusic(){
	if(music.paused){
		music.play();
		document.querySelector("#musicBtn").innerHTML = "⏸";
	} else {
		music.pause();
		document.querySelector("#musicBtn").innerHTML = "⏵";
	}
}

function preparePlay(){
	music.removeEventListener("canplaythrough", preparePlay);
	document.querySelector("#musicBtn").innerHTML = "⏵";
	document.querySelector("#musicBtn").addEventListener("click", toggleMusic);
    document.querySelector("#volumeBtn").addEventListener("input", changeVolume);
}

function changeVolume(e){    
    music.volume = e.target.value;
}

function setColor(){
    /*document.querySelector("#buttons").style.color =  document.querySelector("#colorBtn").value;
    document.querySelector("#container").style.color =  document.querySelector("#colorBtn").value;
    document.querySelector("#musicBtn").style.color =  document.querySelector("#colorBtn").value;
    document.querySelector("#okBtn").style.color =  document.querySelector("#colorBtn").value;
    document.querySelector("#backgroundInput").style.color =  document.querySelector("#colorBtn").value;*/
    let color = document.querySelector("#colorBtn").value; /*how can I optimize this function? ↑*/
    document.querySelectorAll("#buttons, #container, #musicBtn, #okBtn, #backgroundInput").forEach(el => el.style.color = color);
    
}

function setFilter(){
	let filter = "brightness(" + document.querySelector("#brightnessBtn").value + "%)";
    filter += " blur(" + document.querySelector("#blurBtn").value + "px)";/*varatasin veebielementide tundist*/ 
	document.querySelector("#background").style.filter = filter;
}
function setBackground(){
	let backgroundImg = "url('" + document.querySelector("#backgroundInput").value + "')no-repeat center/cover";
	document.querySelector("#background").style.background = backgroundImg;
    document.querySelector("#background").style.backgroundSize = '120%';
}