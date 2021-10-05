const audio = new Audio("./sound.mp3");

function addClass(a) {
  const playing = document.getElementById(`${a}`);
  playing.classList.toggle("playing");
}

function checkKeyPress(key) {
  switch (key) {
    case "a":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "s":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "d":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "f":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "g":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "h":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "j":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "k":
      addClass(key);
      audio.play();
      audio.currentTime = 0;
      break;
    case "l":
      addClass(key);
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
