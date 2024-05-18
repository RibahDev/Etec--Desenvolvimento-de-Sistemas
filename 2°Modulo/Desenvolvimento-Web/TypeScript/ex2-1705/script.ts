let clickCount = 0;
const clickButton = document.getElementById('clickButton');
const clickCountSpan = document.getElementById('clickCount');

if (clickButton && clickCountSpan) {
    clickButton.addEventListener('click', () => {
        clickCount++;
        clickCountSpan.textContent = clickCount.toString();
    });
}