// Get DOM elements by their IDs
const userInput = document.getElementById('user-input')
const inputName = document.getElementById('input-name')
const submitButton = document.getElementById('submit-button')
const userMessage = document.getElementById('user-message')
const welcomeMessage = document.getElementById('welcome-message')
const colorMessage = document.getElementById('color-message')
const changeColorButton = document.getElementById('change-color-button')
const changeNameButton = document.getElementById('change-name-button')


// Event listener for the submit button
submitButton.addEventListener('click', () => {
    // If the name input field is empty, alert the user to enter their name
    if (inputName.value === '') {
        alert('Please enter your name')
        return
    }
    userInput.style.display = 'none'
    userMessage.style.display = 'block'
    
    welcomeMessage.textContent = `Welcome ${inputName.value}!`
    colorMessage.textContent =`The random color generated for you is ${randomColor()}.`

    changeBackgroundColor()

})

// Event listener for the change name button
changeNameButton.addEventListener('click', () => {
    userInput.style.display = 'block'
    userMessage.style.display = 'none'
    inputName.value = ''
})

// Event listener for the change color button
changeColorButton.addEventListener('click', () => {

    changeBackgroundColor()
            colorMessage.textContent =`The random color generated for you is ${randomColor()}.`

})

// Function to change the background color
function changeBackgroundColor() {
    const color = randomColor()
    document.body.style.backgroundColor = color
    return color;
}

// Function to generate a random color
function randomColor() {
    var red = getRandomInt(0, 255)
    var green = getRandomInt(0, 255)
    var blue = getRandomInt(0, 255)
    return "rgb(" + red + "," + green + "," + blue + ")"
}

// Function to generate a random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

