const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputValue = event.target.value;
    const requiredLength = 6;

    if (inputValue.length === requiredLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }

    console.log(inputValue);
}
