document.addEventListener("DOMContentLoaded", function () {
    let grids = document.querySelectorAll(".grid");
    let cube = document.querySelector(".cube");
  
    grids.forEach((grid) => {
      for (let i = 0; i < 100; i++) {
        let span = document.createElement("span");
        grid.appendChild(span);
      }
    });
  
    // Active class
    function activeClass() {
      grids.forEach((grid) => {
        let spans = grid.querySelectorAll("span");
        let randomIdx = Math.floor(Math.random() * spans.length);
        spans[randomIdx].classList.add("active");
  
        // Remove active class
        let removeTime = Math.floor(Math.random() * 1000) + 500; // Random time between 500ms and 1500ms
        setTimeout(() => {
          spans[randomIdx].classList.remove("active");
        }, removeTime);
      });
    }
  
    // Call active class function at random intervals
    function randomInterval() {
      let interval = Math.floor(Math.random() * 200) + 100; // Random interval between 100ms and 300ms
      activeClass();
      setTimeout(randomInterval, interval);
    }
  
     randomInterval(); // Start the random interval function
  
    document.addEventListener("mousemove", (e) => {
      let x = e.clientX / window.innerWidth - 0.5;
      let y = e.clientY / window.innerHeight - 0.5;
      cube.style.transform = `rotateX(${y * 360}deg) rotateY(${x * 360}deg)`;
    });
  });
  