let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonLetter = this.innerHTML;

    playSound(buttonLetter);

    animation(buttonLetter);

  });

}

document.addEventListener("keypress", function(event) {

  playSound(event.key);

  animation(event.key);

});

function playSound(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();

    case "s":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

    case "d":
      let kick = new Audio("sounds/kick.mp3");
      kick.play();

    case "j":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

    case "k":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();

    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

    default:
  }

}

function animation(currentKey) {

   let activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function() {
     activeButton.classList.remove("pressed");
   }, 100);

}
