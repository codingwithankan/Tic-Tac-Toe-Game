console.log("Welcome to Tic Tac Toe game");
let music = new Audio("music.mp3");
let audioTurn = new Audio("move.mp3");
let gameover = new Audio("overgame.mp3");
let turn = "x";

// funtion to change the turn
const changeTurn = () => {
  return turn === "x" ? "0" : "x";
};

//fuction to check for win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  // defining Array of array
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "won";

      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "116px";
    }
  });
};

//game logic start

// music.play();

//click listener
let boxes = document.getElementsByClassName("box");
//event listner
//hr box pe ek ek event listner lagayenge

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      document.getElementsByClassName("info")[0].innertext = "Turn for " + turn;
    }
  });
});

//add onclick listner to reset button

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "x";
  document.getElementsByClassName("info")[0].innertext = "Turn for " + turn;
  //width will zero when rsest ing of the emoji
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
