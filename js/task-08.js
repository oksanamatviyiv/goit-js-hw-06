const form = document.querySelector('form.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

const formElements = event.target.elements;
const mail = formElements.email.value;
const password = formElements.password.value;

    if (mail && password) {
        console.log(mail, password);
        form.reset();
    } else {
        alert('Please fill in all the fields!');
    }
};
