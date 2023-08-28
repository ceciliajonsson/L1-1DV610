
const userInput = document.getElementById('user-input')
const inputName = document.getElementById('input-name')
const submitButton = document.getElementById('submit-button')
const userMessage = document.getElementById('user-message')
const welcomeMessage = document.getElementById('welcome-message')
const colorMessage = document.getElementById('color-message')
const changeColorButton = document.getElementById('change-color-button')

submitButton.addEventListener('click', () => {
    if (inputName.value === '') {
        alert('Please enter your name')
        return;
    }
    userInput.style.display = 'none'
    userMessage.style.display = 'block'
    welcomeMessage.textContent = `Welcome ${inputName.value}.`
    colorMessage.textContent =`The random color generated for you is ${randomColor()}.`

    changeBackgroundColor()

});

changeColorButton.addEventListener('click', () => {

    changeBackgroundColor()
            colorMessage.textContent =`The random color generated for you is ${randomColor()}.`

});
function changeBackgroundColor() {
    const color = randomColor()
    document.body.style.backgroundColor = color
    return color; 
}

function randomColor() {
    var red = getRandomInt(0, 255)
    var green = getRandomInt(0, 255)
    var blue = getRandomInt(0, 255)
    return "rgb(" + red + "," + green + "," + blue + ")"
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

