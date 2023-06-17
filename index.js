/*Function to play sound*/
function playSound(str) {
  let address = "./assets/sounds/";
  switch(str) {
    case "w" : address += "crash"; break;
    case "a" : address += "kick-bass"; break;
    case "s" : address += "snare"; break;
    case "d" : address += "tom-1"; break;
    case "j" : address += "tom-2"; break;
    case "k" : address += "tom-3"; break;
    case "l" : address += "tom-4"; break;
  }
  address += ".mp3";
  let audio = new Audio(address);
  audio.play();
}

/*Button Animation on click*/
function animateButtonOnPress(currentButton) {
  let buttonElement = document.querySelector("."+currentButton);
  buttonElement.classList.add("pressed");
  setTimeout(function() {
    buttonElement.classList.remove("pressed");
  }, 100);
}

/*Adding Event Listener to drum buttons in case of click*/
let numberOfDrums = document.querySelectorAll(".drum").length;
for(let i=0; i<numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playSound(this.classList[0]);
    animateButtonOnPress(this.classList[0]);
    // console.log(this);
  });
}

/*Adding Event Listener in case of keystrokes*/
document.addEventListener("keypress", function(event) {
  playSound(event.key);
  animateButtonOnPress(event.key);
  // console.log(event);
});

