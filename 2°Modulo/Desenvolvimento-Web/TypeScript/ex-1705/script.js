document.addEventListener('DOMContentLoaded', function () {
    var celsiusInput = document.getElementById('celsius');
    var convertBtn = document.getElementById('convertBtn');
    var resultDiv = document.getElementById('result');
    convertBtn.addEventListener('click', function () {
        var celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            var fahrenheit = (celsius * 9 / 5) + 32;
            resultDiv.textContent = "".concat(celsius, "\u00B0C is ").concat(fahrenheit.toFixed(2), "\u00B0F");
        }
        else {
            resultDiv.textContent = "Please enter a valid temperature in Celsius";
        }
    });
});
