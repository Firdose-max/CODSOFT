let display = document.getElementById('display');

// Append a number or operator to the display
function appendToDisplay(value) {
    display.value += value;
}

// Calculate the result of the expression
function calculate() {
    try {
        display.value = eval(display.value);  // Evaluates the expression in the display
    } catch (error) {
        display.value = 'Error';  // If there's an error in the calculation
    }
}

// Clear the display
function clearDisplay() {
    display.value = '';
}
