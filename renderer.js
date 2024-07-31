const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const submit = document.getElementById("submit");
const startText = document.getElementById("startText");
const endText = document.getElementById("endText");

console.log("testtt");

submit.onclick = setTime;

function setTime(){
    let start = startTime.value;
    let end = endTime.value;
    startText.innerText = start;
    endText.innerText = end;
}

function convertTimeToMinutes(t){
    let hours = Number(t.split(':')[0]);
    return hours*60 + Number(t.split(':')[1]);
}

