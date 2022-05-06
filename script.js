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
    let hour = date.getHours() % 12 == 0 ? 12 : date.getHours() % 12;
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    timeElem.innerHTML = hour + ":" + minutes + ":" + seconds + amPm;
}


function setTime() {
    let curDate = new Date()
    let judgement = new Date("May 8, 2022 19:30:00");
    let listRelease = new Date("May 5, 2022 0:00:00");
    

    let msDiff = curDate - listRelease;
    msDiff *= 96;

    if (curDate < judgement) {
        var scavStart = new Date("January 1, 2016 0:00:00");
        var scavTime = new Date(scavStart.getTime() + msDiff);
        
        // Adjust for 2014 supposedly being a leap year
        scavTime.setYear(scavTime.getFullYear() - 2);
    } else {
        var scavStart = new Date("January 1, 2015 0:00:00");
        msDiff -= 1000 * 366 * 24 * 60 * 60;
        var scavTime = new Date(scavStart.getTime() + msDiff);   
    }
    

    

    writeTime("chicago", curDate);
    writeTime("scav", scavTime);

    let t = setTimeout(function(){ setTime() }, 10);
}

setTime()
// 1 day = 15 minutes
// 86400 scav seconds = 900 IRL seconds