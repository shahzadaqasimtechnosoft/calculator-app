import {addCalculatorButtons} from "./add-buttons.js";
import {calculate} from "./calculator.js";

addCalculatorButtons();
let calculatorScreen = document.getElementById('screen');

function reactToInputChanged(inputText) {
    if (inputText === 'C' || inputText === 'c') {
        calculatorScreen.innerText = '';
    } else if (inputText === '=') {
        calculatorScreen.innerText = calculate(calculatorScreen.innerText);
    } else {
        calculatorScreen.innerText = calculatorScreen.innerText + inputText;
    }
}

document.querySelectorAll('.calculator-button').forEach(item => {
    item.addEventListener('click', event => {
        reactToInputChanged(event.target.innerText);
    });
});

let permissibleKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '=', 'c'];

document.addEventListener('keydown', event => {
    if (permissibleKeys.includes(event.key)) {
        reactToInputChanged(event.key);
    }
});
