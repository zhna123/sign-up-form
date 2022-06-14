const password = document.querySelector('.password input[type=password]');
const confirm = document.querySelector('.confirm input[type=password]');

function validatePassword() {
    if (confirm.value !== password.value) {
        confirm.setCustomValidity('Passwords do not match.');
        confirm.reportValidity();
    } else {
        confirm.setCustomValidity('');
    }
    confirm.checkValidity();
}

confirm.addEventListener("input", e => {
    validatePassword();
})
