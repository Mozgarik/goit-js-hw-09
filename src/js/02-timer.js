import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

console.log(Date.parse("Dec 10, 2022"))

const sec = document.querySelector('span[data-seconds]')
const min = document.querySelector('span[data-minutes]')
const hour = document.querySelector('span[data-hours]')
const day = document.querySelector('span[data-days]')
const button = document.querySelector('button[data-start]')

button.setAttribute('disabled', 'disbaled')
button.addEventListener('click', calculateDate)


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: handleClose,
};

function handleClose() {
  const dateInFuture = Date.parse(futureDate.latestSelectedDateObj)
    const currentTime = Date.now()
    const data = dateInFuture - currentTime
    const validate = validateData(data)

}

const futureDate = flatpickr("#datetime-picker", options)


function calculateDate() {
  console.log(futureDate)
  setInterval(() => {
    const dateInFuture = Date.parse(futureDate.latestSelectedDateObj)
    const currentTime = Date.now()
    const data = dateInFuture - currentTime
    const { days, hours, minutes, seconds } = convertMs(data)
    changeMarkup({ days, hours, minutes, seconds })    
  }, 1000) 
}


function changeMarkup({ days, hours, minutes, seconds }) {
    sec.innerHTML = seconds;
    min.innerHTML = minutes;
    hour.innerHTML = hours;
    day.innerHTML = days;
}

function validateData(data) {
  if (data < 0) {
    Report.warning('Warning', 'Please choose a date in the future', 'Ok');
    return false 
   }
   button.removeAttribute('disabled')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

