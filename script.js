const display = document.querySelector(".display"),
  btn = document.querySelectorAll(".btn"),
  delBtn = document.querySelector(".btn-del"),
  okBtn = document.querySelector(".btn-ok"),
  win = document.querySelector(".win"),
  body = document.querySelector("body");

let notWork = false;
const arr = [];

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (notWork) {
    } else if (arr.length <= 8) {
      arr.push(btn.innerHTML);
      display.innerHTML = `${arr.join("")}`;
    }
  });
});

delBtn.addEventListener("click", () => {
  arr.pop();
  display.innerHTML = `${arr.join("")}`;
});

okBtn.addEventListener("click", () => {
  notWork = true;
  let time = arr.join("");
  let seconds = arr.join("");

  display.style.cssText = `animation-iteration-count: ${time};`;
  let timerId = setInterval(() => {
    if (seconds <= 1) {
      win.style.cssText = "display: flex;";
    }
    seconds--;
    display.innerHTML = seconds;
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
    console.log("boom");
  }, time + "000");

  //   setTimeout(boom, time + "000");
  //   console.log(time);
});

const boom = () => {
  console.log("boom");
};
