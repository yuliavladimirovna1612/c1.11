const hoursNode = document.querySelector('.j-timer__hours');
const minutesNode = document.querySelector('.j-timer__minutes');
const secondsNode = document.querySelector('.j-timer__seconds');

const btnMode25 = document.querySelector('.j-btn-25');
const btnMode15 = document.querySelector('.j-btn-15');
const btnMode5 = document.querySelector('.j-btn-5');

const btnAddHour = document.querySelector('.j-btn-hour');
const btnAddMinute = document.querySelector('.j-btn-minute');
const btnAddSecond = document.querySelector('.j-btn-second');

const btnMinusHour = document.querySelector('.j-btn-hour-min');
const btnMinusMinute = document.querySelector('.j-btn-minute-min');
const btnMinusSecond = document.querySelector('.j-btn-second-min');

const btnStart = document.querySelector('.j-btn-start');
const btnPause = document.querySelector('.j-btn-pause');
const btnReset = document.querySelector('.j-btn-reset');

const message = document.querySelector('.message');


let time = 0;
let nIntervId = null;

const numberConverter = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return `${value}`;
}

const changeTimerTime = () => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor((time - hours * 60 * 60) / 60);
  const seconds = time - hours * 60 * 60 - minutes * 60;
  
  hoursNode.innerHTML = numberConverter(hours);
  minutesNode.innerHTML = numberConverter(minutes);
  secondsNode.innerHTML = numberConverter(seconds);
}

const pauseTimer = () => {
  if (nIntervId) {
    clearInterval(nIntervId);
    nIntervId = null;
  }
}

changeTimerTime();

btnMode25.addEventListener('click', () => {
  pauseTimer();
  time = 25 * 60;
  changeTimerTime();
});
btnMode15.addEventListener('click', () => {
  pauseTimer();
  time = 15 * 60;
  changeTimerTime();
});
btnMode5.addEventListener('click', () => {
  pauseTimer();
  time = 5 * 60;
  changeTimerTime();
});



btnAddHour.addEventListener('click', () => {
  pauseTimer();
  time = time + 60 * 60;
  changeTimerTime();
});
btnAddMinute.addEventListener('click', () => {
  pauseTimer();
  time = time + 60;
  changeTimerTime();
});
btnAddSecond.addEventListener('click', () => {
  pauseTimer();
  time = time + 1;
  changeTimerTime();
});


btnMinusHour.addEventListener('click', () => {
  pauseTimer();
  if (time > 0) {
    time = time - 60 * 60;
  changeTimerTime();
  }
});
btnMinusMinute.addEventListener('click', () => {
  pauseTimer();
  if (time > 0) {
    time = time - 60;
  changeTimerTime();
  }
});
btnMinusSecond.addEventListener('click', () => {
  pauseTimer();
  if (time > 0) {
    time = time - 1;
  changeTimerTime();
  }
});



btnReset.addEventListener('click', () => {
  pauseTimer();
  time = 0;
  changeTimerTime();
});

btnStart.addEventListener('click', () => {
  console.log('nIntervId', nIntervId)

  if (!nIntervId && time > 0) {
    nIntervId = setInterval(() => {
      if (time > 0) {
        time = time - 1;
        changeTimerTime();
      } else {
        clearInterval(nIntervId);
        message.innerHTML = '<p>Countdown is over</p>';
        nIntervId = null;
      }
    }, 1000); 
  }
});

btnPause.addEventListener('click', pauseTimer);
