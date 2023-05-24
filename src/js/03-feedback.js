import throttle from "lodash.throttle";

function saveForm() {
    const emailInput = document.querySelector('input[name="email"]');
    const textInput = document.querySelector('textarea[name="message"]');

    const form = {
        email: emailInput.value,
        message: textInput.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(form));
}