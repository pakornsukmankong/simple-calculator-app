const displayElement = document.getElementById('calculator-display-current')

const buttonPressed = (char) => {
    displayElement.value = displayElement.value + char 
}

const compute = () => {
    displayElement.value = eval(displayElement.value)
}

const doClear = () => {
    displayElement.value = null
}

const doDeleteChar = () => {
    displayElement.value = displayElement.value.slice(0, -1)
}