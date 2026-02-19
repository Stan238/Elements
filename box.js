
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
   timer ??= setInterval(countdown, 1);
}

function countdown( ) {
    count--;
    if (count >= 1) {
        console.log(count);
        timeView();
    } else {
        box.textContent = 'END';
        return clean();
    }
}
function  timerClock() {
    count++;
    timeView();
}

function startTimer() {
    buttonsDisable();
    timer ??= setInterval(timerClock, 1);
}


function clean() {
    clearInterval(timer);
    if (timer != null) {
        timer = null;
    } else {
        count = 10;
        buttonClean.disabled = true;
        timeView();

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


function timeView() {
    const secView = count % 60;
    const minViewFull = Math.floor(count / 60 );
    const hourViewFull = Math.floor(minViewFull / 60);
    console.log(hourViewFull);
    console.log(minViewFull);
    console.log(secView);
    box.textContent = `${hourViewFull % 60} : ${minViewFull % 60} : ${secView}`;
        }