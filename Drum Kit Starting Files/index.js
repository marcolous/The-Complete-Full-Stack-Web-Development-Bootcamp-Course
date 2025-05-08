var myAudioList = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];

document.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", () => {
    var audio = new Audio(myAudioList[index]);
    audio.play();
    var buttonInnterHTML = button.innerHTML;
    buttonAnim(buttonInnterHTML);
    alert(myAudioList[index]);
  });
});

document.addEventListener("keypress", (event) => {
  switch (event.key.toLowerCase()) {
    case "w":
      var audio = new Audio(myAudioList[0]);
      audio.play();
      buttonAnim(event.key.toLowerCase());
      break;
    case "a":
      var audio = new Audio(myAudioList[1]);
      audio.play();
      buttonAnim(event.key.toLowerCase());
      break;
    case "s":
      var audio = new Audio(myAudioList[2]);
      audio.play();
      buttonAnim(event.key.toLowerCase());
      break;
    case "d":
      var audio = new Audio(myAudioList[3]);
      audio.play();
      buttonAnim(event.key.toLowerCase());
      break;
    case "j":
      var audio = new Audio(myAudioList[4]);
      audio.play();
      buttonAnim(event.key.toLowerCase());
      break;
    case "k":
      var audio = new Audio(myAudioList[5]);
      audio.play();
      buttonAnim(event.key.toLowerCase());
      break;
    case "L":
      var audio = new Audio(myAudioList[6]);
      audio.play();
      buttonAnim(event.key.toLowerCase());
      break;
  }
});

function buttonAnim(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
