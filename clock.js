let h, m, s, minuteVal, hourVal, secondVal, dateElement, day, month, year;
let r, g, b;

h = document.getElementById('hours');
m = document.getElementById('minutes');
s = document.getElementById('seconds');
dateElement = document.getElementById('date');
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

window.onload = function(){
	document.querySelector("#brightnessBtn").addEventListener("input", setFilter);
    document.querySelector("#blurBtn").addEventListener("input", setFilter);
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
}

setInterval(updateClock, 1000);
updateClock();