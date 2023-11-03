const inputEl = document.querySelector('input');
const text = document.querySelector('span#text');

inputEl.addEventListener('input', onInputChangeSize);

function onInputChangeSize(event) {
    const rngValue = event.target.value;
    text.style.fontSize = `${rngValue}px`;

console.log(event.curentTarget);
};
