const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});