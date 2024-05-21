document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius') as HTMLInputElement;
    const convertBtn = document.getElementById('convertBtn') as HTMLButtonElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;
    
    convertBtn.addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultDiv.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultDiv.textContent = 'Please enter a valid temperature in Celsius';
        }
    });
});