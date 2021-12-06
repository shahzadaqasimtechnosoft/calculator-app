import {calculate} from "./calculator.js";

let calculatorScreen = document.getElementById('screen');

document.querySelectorAll('.calculator-button').forEach(item => {
    item.addEventListener('click', event => {
        if (event.target.innerText === 'C') {
            calculatorScreen.innerText = '';
        } else if (event.target.innerText === '=') {
            calculatorScreen.innerText = calculate(calculatorScreen.innerText);
        } else {
            calculatorScreen.innerText = calculatorScreen.innerText + event.target.innerText;
        }
    });
});
