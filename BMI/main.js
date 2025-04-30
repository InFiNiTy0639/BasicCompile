const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

const words = [
    "Welcome to BMI platform",
    "HII this is @MARQ",
    "Maintain your Health",
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