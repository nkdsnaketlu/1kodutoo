let h, m, s, wd, minuteVal, hourVal, secondVal, dateElement, day, month, year, weekDay;

h = document.getElementById('hours');
m = document.getElementById('minutes');
s = document.getElementById('seconds');
dateElement = document.getElementById('date');
wd = document.getElementById('weekday');
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let dayNames =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

window.onload = function(){
    document.querySelector("#brightnessBtn").addEventListener("input", setFilter);
    document.querySelector("#blurBtn").addEventListener("input", setFilter);
    document.querySelector("#colorBtn").addEventListener("input", setColor);
    document.body.addEventListener("click", unmute); 
}

function unmute(){
    let audio = document.getElementById("audioPlayer");  //"why autoplay on audio element is not working?"
    if (audio) {
        audio.muted = false; 
        audio.volume = '0.3'; //"can I change default value of audioplayers volume like audio.volume = '50'?"
       audio.play(); 
    }
}

function setColor(){
    document.querySelector("#buttons").style.color =  document.querySelector("#colorBtn").value;
    document.querySelector("#container").style.color =  document.querySelector("#colorBtn").value;
}

function setFilter(){
	let filter = "brightness(" + document.querySelector("#brightnessBtn").value + "%)";
    filter += " blur(" + document.querySelector("#blurBtn").value + "px)";/*varatasin veebielementide tundist*/ 
	document.querySelector("#background").style.filter = filter;
}
function setBackground(){
	let backgroundImg = "url('" + document.querySelector("#backgroundIput").value + "')no-repeat center/cover";
	document.querySelector("#background").style.background = backgroundImg;
    document.querySelector("#background").style.backgroundSize = '120%';
}

function updateClock(){
    console.log("was able to updateClock");
    let date = new Date();
    hourVal = date.getHours();
    minuteVal = date.getMinutes();
    secondVal = date.getSeconds();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    //weekDay = date.getDay();

    if (hourVal<10) {
        hourVal = "0" + hourVal;
    }

    if (minuteVal<10) {
        minuteVal = "0" + minuteVal;
    }

    if (secondVal<10) {
        secondVal = "0" + secondVal;
    }

    h.innerHTML = hourVal + ":";
    m.innerHTML = minuteVal + ":";
    s.innerHTML = secondVal;
    dateElement.innerHTML = day + " " + monthNames[month] + ' ' + year;
    wd.innerHTML = dayNames[date.getDay()];
}

setInterval(updateClock, 1000);
updateClock();