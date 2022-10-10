const display = document.querySelector(".display"),
box = document.querySelector('.box');

let seconds = "5";

let timerId = setInterval(() => {
  if (seconds == 1) {
    location.href = "https://youtu.be/dQw4w9WgXcQ";
  } else if (seconds == 2) {
    box.style.cssText = 'animation-iteration-count: infinite;'
  }
  seconds--;
  display.innerHTML = `0:0${seconds}`;
}, 1000);
