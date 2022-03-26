const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const body = document.body 
let timeID = null;

startBtn.addEventListener('click', startChangeColor)
stopBtn.addEventListener('click', stopChangeColor)

function startChangeColor() {
startChangeHexColor();
toggleButton();
}

function stopChangeColor() {
stopChangeHexColor();
}

function startChangeHexColor() {
    timeID = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopChangeHexColor() {
clearInterval(timeID);
toggleButton();
}

function toggleButton() {
    startBtn.toggleAttribute('disabled')
    stopBtn.toggleAttribute('disabled')
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }