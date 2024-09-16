const startBtn = document.getElementById("Start");
const stopBtn = document.getElementById("Stop");
const resetBtn = document.getElementById("Reset");
const timer = document.getElementById("timer");


let interval;
let timeRemaining = 1500;

function updateTimer() { // converts milliseconds
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; // format seconds and mintues to have double digit

    timer.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeRemaining--;
        updateTimer();
        if (timeRemaining === 0) {
            clearInterval(interval)
            alert("Time's up!");
            timeRemaining = 1500;
            updateTimer();
        }
    }, 1000);
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
