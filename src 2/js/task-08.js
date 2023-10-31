const form = document.querySelector('form.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log('Please fill in all the fields!');

    const formElements = event.target.elements;
console.dir(formElements);

const mail = formElements.email.value;
const password = formElements.password.value;

console.log(mail, password); 
form.reset();
};
