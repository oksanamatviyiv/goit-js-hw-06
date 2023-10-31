function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('button');
const bgColorCurrent = document.querySelector('.change-color');
const bgColorCurrentName = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bgColorCurrent.style.backgroundColor = randomColor;
  bgColorCurrentName.textContent = randomColor;
});





