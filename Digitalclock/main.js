const clock = document.getElementById("clock");
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

const words = [
  "Welcome to digital clock platform",
  "HII this is @MARQ",
  "Beautiful time Zone",
];
let index = 0;
let charIndex = 0;
const typingSpeed = 40;
const erasingSpeed = 30;
const delayBetweenWords = 2000;
const animatedWordElement = document.getElementById("animatedWord");

function type() {
  if (charIndex < words[index].length) {
    animatedWordElement.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    animatedWordElement.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, typingSpeed);
});