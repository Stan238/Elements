
const box = document.getElementById("box")
const buttonStart = document.getElementById('start');
const buttonClean = document.getElementById('clean');
let count = 10;
let timer;
box.textContent ='';


function startCountdown() {
    buttonStart.disabled = true;
    buttonClean.disabled = false;
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


function clean() {
    clearInterval(timer);
    timer = null;
    count = 10;
    box.textContent = '';
    buttonStart.disabled = false;
    buttonClean.disabled = true;
  
}


