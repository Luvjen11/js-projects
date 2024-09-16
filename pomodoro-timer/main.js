const startBtn = document.getElementById("Start");
const stopBtn = document.getElementById("Stop");
const resetBtn = document.getElementById("Reset");
const timer = document.getElementById("timer");
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
const longBreak = document.getElementById("longBreak");

let interval;
let timeRemaining = 0;

function updateTimer() { // converts milliseconds
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; // format seconds and mintues to have double digit

    timer.innerHTML = formattedTime;
}

function startTimer() { // general start timer
    interval = setInterval(() => {
        timeRemaining--;
        updateTimer();
        if (timeRemaining <= 0) {
            clearInterval(interval)
        }
    }, 1000);
}

function pomodoroStart() {
    timeRemaining = 1500;
    updateTimer();
    startTimer();
}

function shortStart() {
    timeRemaining = 300;
    updateTimer();
    startTimer();
}

function longStart() {
    timeRemaining = 600;
    updateTimer();
    startTimer();
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeRemaining = 1500;
    updateTimer();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
pomodoro.addEventListener("click", pomodoroStart);
shortBreak.addEventListener("click", shortStart);
longBreak.addEventListener("click", longStart)


