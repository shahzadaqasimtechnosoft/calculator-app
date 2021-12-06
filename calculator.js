let operations = ['+', '-', '*', '/'];

let add = (a, b) => parseFloat(a) + parseFloat(b);
let subtract = (a, b) => parseFloat(a) - parseFloat(b);
let multiply = (a, b) => parseFloat(a) * parseFloat(b);
let divide = (a, b) => parseFloat(a) / parseFloat(b);

let resolveNegation = (splitUpExpression) => {
    for (let i = 0; i < splitUpExpression.length; i++) {
        if (splitUpExpression[i].length > 1) {
            let currExpression = splitUpExpression[i];
            if (operations.includes(currExpression[0])) {
                splitUpExpression[i] = currExpression[0];
                splitUpExpression.splice(i + 1, 0, currExpression[1]);
                console.log(splitUpExpression);
                i = 0;
            }
        }
    }
    for (let i = 0; i < splitUpExpression.length; i++) {
        if (splitUpExpression[i] === '-') {
            if (i === 0 || operations.includes(splitUpExpression[i - 1])) {
                splitUpExpression[i + 1] = -1 * parseFloat(splitUpExpression[i + 1]);
                splitUpExpression.splice(i, 1);
                console.log(splitUpExpression);
                i = 0;
            }
        }
    }
    return splitUpExpression;
};

let evaluate = (splitUpExpression, operation, operationSymbol) => {
    for (let i = 0; i < splitUpExpression.length; i++) {
        if (splitUpExpression[i] === operationSymbol) {
            splitUpExpression[i] = operation(splitUpExpression[i - 1], splitUpExpression[i + 1]);
            splitUpExpression.splice(i + 1, 1);
            splitUpExpression.splice(i - 1, 1);
            console.log(splitUpExpression);
            i = 0;
        }
    }
    return splitUpExpression;
};

let calculate = (expr) => {
    console.log(expr);
    let splitUp = expr.match(/[^\d]+|[\d]+/g);
    splitUp = resolveNegation(splitUp);
    splitUp = evaluate(splitUp, divide, '/');
    splitUp = evaluate(splitUp, multiply, '*');
    splitUp = evaluate(splitUp, subtract, '-');
    let result = evaluate(splitUp, add, '+');
    return result[0];
};

export {calculate}
