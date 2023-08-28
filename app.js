const inputName = document.getElementById('input-name');
const submitButton = document.getElementById('submit-button');
const welcomeMessage = document.getElementById('welcome-message');

// Show name without using innerHTML
submitButton.addEventListener('click', () => {
    welcomeMessage.textContent = `Welcome ${inputName.value}`;
});
