

const inputName = document.getElementById('input-name');
const submitButton = document.getElementById('submit-button');
const welcomeMessage = document.getElementById('welcome-message');
const userInput = document.getElementById('user-input')

// Show name without using innerHTML
submitButton.addEventListener('click', () => {
    if (inputName.value === '') {
        alert('Please enter your name');
        return;
    }
    welcomeMessage.textContent = `Welcome ${inputName.value}`;
    welcomeMessage.style.display = 'block';
    userInput.style.display = 'none';
    changeBackgroundColor()

});
function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
}

function randomColor() {
    var red = getRandomInt(0, 255);
    var green = getRandomInt(0, 255);
    var blue = getRandomInt(0, 255);
    return "rgb(" + red + "," + green + "," + blue + ")";
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

