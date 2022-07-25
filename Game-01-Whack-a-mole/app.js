// selecting all the suqare class elements
const squares = document.querySelectorAll(".square");
//selecting the mole 
const mole = document.querySelector(".mole");
//defining time left
const timeleft = document.querySelector("#time-left");
//defining score
const score = document.querySelector("#score");

//variable to store the final score
let result = 0;
// variable to register the position of clicks
let htiPosition;
//variable to stop the game when its over
let timerID = null;
//variable to keep track of the time of the game
let currenttime = 60;
// function to pick random squares
function randomsquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomsquare = squares[Math.floor(Math.random() * 9)];
  randomsquare.classList.add("mole");
//   registering the square in the variable to count the score in case of a click
  htiPosition = randomsquare.id;
}
// function to register the click on the mole and add up the score
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == htiPosition) {
      result++;
      score.textContent = result;
    //   hitposition is reseted for the next mole
      htiPosition = null;
    }
  });
});

/**
 * function to move the mole every 1000ms 
 */
function movemole() {
  timerID = setInterval(randomsquare, 1000);
}
movemole();

/**
 * funtion to count the time passed
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
