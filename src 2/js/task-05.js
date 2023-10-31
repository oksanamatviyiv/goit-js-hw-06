const textOutput = document.querySelector('span#name-output');
const textInput = document.querySelector('#name-input');

textInput.addEventListener('input', event => {
    const value = event.target.value;
    if (value === '') {
        textOutput.textContent = 'Anonymous';
    } else {
        textOutput.textContent = value;
    }
});

console.log(textInput);


