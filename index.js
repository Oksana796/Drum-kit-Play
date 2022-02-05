//detecting button press

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    //this.style.color = "white";
    //new Audio("sounds/crash.mp3").play();
  }
}

// detecting keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;

    case "a":
      var audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;

    case "s":
      var audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;

    case "d":
      var audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;

    case "j":
      var audioJ = new Audio("sounds/snare.mp3");
      audioJ.play();
      break;

    case "k":
      var audioK = new Audio("sounds/crash.mp3");
      audioK.play();
      break;

    case "l":
      var audioL = new Audio("sounds/kick-bass.mp3");
      audioL.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 500);
}
