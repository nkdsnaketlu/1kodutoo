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
    initMusic();
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