let numbers = document.querySelector(".numbers");
let numString = numbers.textContent.trim();
let splitNum = [...numString];
numbers.textContent = "";
let spanElements = splitNum.map((num) => `<span>${num}</span>`).join("");
numbers.innerHTML = spanElements;
