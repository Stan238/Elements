
const box = document.getElementById("box")
const buttonStart = document.getElementById('start');
const buttonClean = document.getElementById('clean');
const buttonTimer = document.getElementById('timer');
let count = 10;
let timer;
box.textContent ='';

buttonStart.disabled = true;
buttonTimer.disabled = true;

setTimeout(()=>{
    alert(" Choose button'Down' or 'Up'!");
        buttonStart.disabled = false;
        buttonTimer.disabled = false;
}, 10
);

function buttonsDisable(){
    buttonStart.disabled = true;
    buttonClean.disabled = false;
    buttonTimer.disabled = true;
}




function startCountdown() {
   buttonsDisable();
    box.textContent = `${count}`;
   timer ??= setInterval(countdown, 1000);
}

function countdown( ) {
    count--;
    if (count >= 1) {
        console.log(count);
        box.textContent = `${count}`;
    } else {
        box.textContent = 'END';
    }
}
function  timerClock() {
    count++;
    box.textContent = `${count}`;
}

function startTimer() {
    buttonsDisable();
    box.textContent = `${count}`;
    timer ??= setInterval(timerClock, 1000);
}


function clean() {
    clearInterval(timer);
    if (timer != null) {
        timer = null;
    } else {
        count = 10;
        buttonClean.disabled = true;
        box.textContent = `${count}`;
    }
    buttonStart.disabled = false;
    buttonTimer.disabled = false;
}

buttonStart.addEventListener("click", () => {
    box.textContent = '';
    startCountdown();
});
buttonClean.addEventListener("click", clean);
buttonTimer.addEventListener("click", () => {
    startTimer();
});