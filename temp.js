
function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const from = document.getElementById('unitFrom').value;
    const to = document.getElementById('unitTo').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temp)) {
      resultDiv.textContent = "❌ Please enter a valid number.";
      return;
    }

    let result;
    let tempInCelsius;

    if (from === "celsius") tempInCelsius = temp;
    else if (from === "fahrenheit") tempInCelsius = (temp - 32) * 5 / 9;
    else if (from === "kelvin") tempInCelsius = temp - 273.15;

    if (to === "celsius") result = tempInCelsius;
    else if (to === "fahrenheit") result = (tempInCelsius * 9 / 5) + 32;
    else if (to === "kelvin") result = tempInCelsius + 273.15;

    const unitLabel = to === "celsius" ? "°C" : to === "fahrenheit" ? "°F" : "K";
    resultDiv.textContent = `✅ Result: ${result.toFixed(2)} ${unitLabel}`;
  }
