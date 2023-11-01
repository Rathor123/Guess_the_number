let genRanDomNum = Math.round(Math.random() * 100);
let message = document.querySelector(".msg");
let count;
let music = new Audio("music.mp3");
let enternum = new Audio("enternum.mp3");
let everymove = new Audio("everymove.mp3");
let won = new Audio("Won.mp3");
music.play();
const playAgain = () => {
  document.getElementsByClassName("random")[0].innerHTML = ``;
  won.pause();
  count = 5;
  document.getElementsByClassName(
    "move"
  )[0].innerHTML = ` you have ${count} left`;
  let genRanDomNum = Math.round(Math.random() * 100);
  // document.getElementsByClassName(
  //   "random"
  // )[0].innerHTML = `Random Number is: ${genRanDomNum}`;
  message.innerHTML = "";
};

count = 5;
document.getElementsByClassName("move")[0].innerHTML = count;

function getNumber() {
  let number = document.querySelector("#number").value;
  let num = Number.parseInt(number);
  if (count == 0) {
    message.innerHTML = "Better Luck-next time";
    document.getElementsByClassName("move")[0].innerHTML = count;
    document.getElementsByClassName(
      "random"
    )[0].innerHTML = `Random Number is: ${genRanDomNum}`;
  }

  if (count >= 1) {
    document.getElementsByClassName("move")[0].innerHTML = `you have ${
      count - 1
    } chance`;

    if (num == genRanDomNum) {
      document.querySelector("#number").value = "";
      message.innerHTML = "you won &#128113 ";
      document.getElementsByClassName(".random")[0].innerHTML = "dlfn";
      won.play();
      music.pause();
    } else if (num < genRanDomNum) {
      document.querySelector("#number").value = "";
      message.innerHTML = "its small try again &#128124";
      everymove.play();
    } else if (document.querySelector("#number").value == "") {
      message.innerHTML = "please enter a  number";
      enternum.play();
    } else {
      document.querySelector("#number").value = "";
      message.innerHTML = "its big try again &#128116";
      everymove.play();
    }
  }
  s();
}
function s() {
  count--;
}
