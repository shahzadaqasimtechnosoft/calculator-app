let calculatorScreen = document.getElementById('screen');

document.querySelectorAll('.calculator-button').forEach(item => {
    item.addEventListener('click', event => {
        calculatorScreen.innerText = calculatorScreen.innerText + event.target.innerText;
    });
});
