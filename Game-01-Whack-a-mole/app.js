// selecting all the suqare class elements
const squares = document.querySelectorAll(".square");
//
const mole = document.querySelector(".mole");
//
const timeleft = document.querySelector("#time-left");
//
const score = document.querySelector("#score");

//
let result = 0;
// 
let htiPosition;
//
let timerID = null;
//
let currenttime = 60;

/**
 * 
 */
function randomsquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomsquare = squares[Math.floor(Math.random() * 9)];
  randomsquare.classList.add("mole");
  htiPosition = randomsquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == htiPosition) {
      result++;
      score.textContent = result;
      htiPosition = null;
    }
  });
});

/**
 * 
 */
function movemole() {
  timerID = setInterval(randomsquare, 1000);
}
movemole();

/**
 * 
 */
function countDown() {
  currenttime--;
  timeleft.textContent = currenttime;
  if (currenttime == 0) {
    clearInterval(countDowntimerid);
    clearInterval(timerID);
    alert("Game Over! Your final score is " + result);
  }
}
let countDowntimerid = setInterval(countDown, 1000);
