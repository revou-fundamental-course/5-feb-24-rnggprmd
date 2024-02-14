// Select input fields and buttons
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('change');

// Function to convert Celsius to Fahrenheit
function convertToCelsius(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function convertToFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to handle conversion
function handleConversion() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = convertToCelsius(celsius);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        alert('Masukkan suhu dalam angka!');
    }
}

// Function to handle reset
function handleReset() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
}

// Function to handle reverse conversion
function handleReverse() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = convertToFahrenheit(fahrenheit);
        celsiusInput.value = celsius.toFixed(2);
    } else {
        alert('Masukkan suhu dalam angka!');
    }
}

// Event listeners for buttons
convertButton.addEventListener('click', handleConversion);
resetButton.addEventListener('click', handleReset);
reverseButton.addEventListener('click', handleReverse);
