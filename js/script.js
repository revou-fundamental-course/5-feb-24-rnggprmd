const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
const reverseButton = document.getElementById("change");

function convertToCelsius(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertToFahrenheit(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function handleConversion() {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = convertToCelsius(celsius);
    fahrenheitInput.value = fahrenheit.toFixed(2);
  } else {
    alert("Masukkan suhu dalam angka!");
  }
}

function handleReset() {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
}

function handleReverse() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheit)) {
    const celsius = convertToFahrenheit(fahrenheit);
    celsiusInput.value = celsius.toFixed(2);
  } else {
    alert("Masukkan suhu dalam angka!");
  }
}

convertButton.addEventListener("click", handleConversion);
resetButton.addEventListener("click", handleReset);
reverseButton.addEventListener("click", handleReverse);
