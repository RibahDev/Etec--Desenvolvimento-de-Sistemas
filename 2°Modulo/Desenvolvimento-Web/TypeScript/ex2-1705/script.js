var clickCount = 0;
var clickButton = document.getElementById('clickButton');
var clickCountSpan = document.getElementById('clickCount');
if (clickButton && clickCountSpan) {
    clickButton.addEventListener('click', function () {
        clickCount++;
        clickCountSpan.textContent = clickCount.toString();
    });
}
