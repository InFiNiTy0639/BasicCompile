const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
         <thead>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    </tbody>
  </table>
    </div>
  `;
});

const words = [
    "Play with Key !! 😁",
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
