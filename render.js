var [timer, hours, min, sec] = [];

function render(state) { 
  [hours, min, sec] = [hours || 0, min || 0, sec || 0];
  
  if (state.firstRun) {
    [hours, min, sec] = [0, 0, 0];
    printTime();
  } else if (state.running) {
    printTime();
    timer = setInterval(printTime, 1000);
  } else if (state.running === false) {
    clearInterval(timer);
  } else {};

  function printTime() {
    if (sec == 60) {sec = 0, min++};
    if (min == 60) {min = 0, hours++};
    timerElem.children[0].innerHTML = `${(hours < 10) ? '0' + hours : hours}:${(min < 10) ? '0' + min : min}:${(sec < 10) ? '0' + sec++ : sec++}`;
  }
}