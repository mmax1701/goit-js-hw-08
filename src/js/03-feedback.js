import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function saveForm() {
    const formValues = {
        email: emailInput.value,
        message: messageInput.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
}

const saveEmail = emailInput.addEventListener('input', saveForm);
const saveMessage = messageInput.addEventListener('input', saveForm);
