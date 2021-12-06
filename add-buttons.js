let calculatorButtons = [
    {
        value: '1',
        class: 'number'
    },
    {
        value: '2',
        class: 'number'
    },
    {
        value: '3',
        class: 'number'
    },
    {
        value: '+',
        class: 'operation'
    },
    {
        value: '4',
        class: 'number'
    },
    {
        value: '5',
        class: 'number'
    },
    {
        value: '6',
        class: 'number'
    },
    {
        value: '-',
        class: 'operation'
    },
    {
        value: '7',
        class: 'number'
    },
    {
        value: '8',
        class: 'number'
    },
    {
        value: '9',
        class: 'number'
    },
    {
        value: '*',
        class: 'operation'
    },
    {
        value: 'C',
        class: 'cancel'
    },
    {
        value: '0',
        class: 'number'
    },
    {
        value: '=',
        class: 'number'
    },
    {
        value: '/',
        class: 'operation'
    }
];

const btnArea = document.getElementsByClassName("button-area")[0];

export function addCalculatorButtons() {
    for (let i = 0; i < calculatorButtons.length; i++) {
        const btn = document.createElement("div");
        const btnText = document.createTextNode(calculatorButtons[i].value);
        btn.appendChild(btnText);
        btn.classList.add('calculator-button', calculatorButtons[i].class);
        btnArea.appendChild(btn);
    }
}
