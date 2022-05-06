function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"]
const MONTHS =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function writeTime(timeDivId, date) {
    var dateElem = document.getElementById(timeDivId).getElementsByClassName("date")[0];
    var timeElem = document.getElementById(timeDivId).getElementsByClassName("time")[0];

    dateElem.innerHTML = DAYS_OF_WEEK[date.getDay()] + 
        ", " + MONTHS[date.getMonth()] + 
        " " + date.getDate() + ", " + date.getFullYear();
    
    let amPm = date.getHours() < 12 ? " AM" : " PM";
    let hour = Math.max(1, date.getHours() % 12);
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    timeElem.innerHTML = hour + ":" + minutes + ":" + seconds + amPm;
}


function setTime() {
    let curDate = new Date();
    let listRelease = new Date("May 5, 2022 0:00:00");
    

    let msDiff = curDate - listRelease;
    msDiff *= 86400 / 900;

    let scavStart = new Date("January 1, 2014 0:00:00");
    let scavTime = new Date(scavStart.getTime() + msDiff);

    writeTime("chicago", curDate);
    writeTime("scav", scavTime);

    let t = setTimeout(function(){ setTime() }, 10);
}

setTime()
// 1 day = 15 minutes
// 86400 scav seconds = 900 IRL seconds