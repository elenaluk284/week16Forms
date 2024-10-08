const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');

form.addEventListener('input', validateForm);
form.addEventListener('focus', clearErrorMessages, true);
form.addEventListener('blur', validateField, true);

function validateForm() {
    submitButton.disabled = !form.checkValidity();
}

function validateField(event) {
    const input = event.target;
    const errorField = document.getElementById(`${input.id}Error`);
    if (!input.validity.valid) {
        errorField.textContent = getErrorMessage(input);
    } else {
        errorField.textContent = '';
    }
}

function clearErrorMessages(event) {
    const input = event.target;
    if (input.tagName === 'INPUT' || input.tagName === 'SELECT') {
        const errorField = document.getElementById(`${input.id}Error`);
        errorField.textContent = '';
    }
}

function getErrorMessage(input) {
    if (input.validity.valueMissing) {
        return 'Это поле обязательно для заполнения.';
    }
    if (input.validity.patternMismatch) {
        return 'Некорректный формат данных.';
    }
    if (input.validity.tooShort) {
        return `Минимальная длина: ${input.minLength} символов.`;
    }
    return '';
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
        console.log({
            name: form.name.value,
            email: form.email.value,
            age: form.age.value,
            gender: form.gender.value,
            profession: form.profession.value,
            password: form.password.value
        });
        form.reset();
        submitButton.disabled = true;
    }
});