import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button');

let formValues = {
  email: emailInput.value,
  message: messageInput.value
};

function saveForm() {
    formValues.email = emailInput.value;
    formValues.message = messageInput.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
}

const throttleSaveForm = throttle(saveForm, 500);

emailInput.addEventListener('input', throttleSaveForm);
messageInput.addEventListener('input', throttleSaveForm);



function getLocal() {
    const getValue = localStorage.getItem('feedback-form-state');
    if (getValue) {
        const parseValue = JSON.parse(getValue);
        emailInput.value = parseValue.email;
        messageInput.value = parseValue.message;
        formValues = parseValue;
    }
}

getLocal();

function buttonClick() {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('feedback-form-state');
        emailInput.value = '';
        messageInput.value = '';
        console.log(formValues);
})
}

buttonClick();