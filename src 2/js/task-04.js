const elements = document.querySelectorAll('#counter');
const btnDecr = counter.firstElementChild;
const btnIncr = counter.lastElementChild;
const valueEl = counter.querySelector('#value');

elements.forEach(element => {
    
    let count = 0; 

btnDecr.addEventListener('click', () => {
    count--;
    valueEl.textContent = count;
    });

btnIncr.addEventListener('click', () => {
    count++;
    valueEl.textContent = count;
    });
    });
