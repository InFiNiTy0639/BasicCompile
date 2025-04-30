const buttons = document.querySelectorAll('.button');
const head = document.querySelector('.heading');
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id === 'grey'){
            head.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aquamarine'){
            head.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aqua'){
            head.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            head.style.backgroundColor = e.target.id;
        }
    })
})

document.querySelectorAll('.button').forEach(btns => {
    btns.addEventListener('click',function(){
        btns.classList.toggle('button')
    })
})

const words = [
    "Enjoy Color switcher with single click",
    "HII this is @MARQ",
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