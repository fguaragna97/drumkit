const audio = new Audio("./sound.mp3");

function checkKeyPress(key) {
  switch (key) {
    case "a":
      audio.play();
      audio.currentTime = 0;
      break;
    case "s":
      audio.play();
      audio.currentTime = 0;
      break;
    case "d":
      audio.play();
      audio.currentTime = 0;
      break;
    case "f":
      audio.play();
      audio.currentTime = 0;
      break;
    case "g":
      audio.play();
      audio.currentTime = 0;
      break;
    case "h":
      audio.play();
      audio.currentTime = 0;
      break;
    case "j":
      audio.play();
      audio.currentTime = 0;
      break;
    case "k":
      audio.play();
      audio.currentTime = 0;
      break;
    case "l":
      audio.play();
      audio.currentTime = 0;
      break;
  }
}

window.addEventListener("keydown", function (e) {
  const key = e.key;
  console.log(key);
  checkKeyPress(key);
});
