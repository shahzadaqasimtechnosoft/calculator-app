let add = () => {};
let subtract = () => {};
let multiply = () => {};
let divide = () => {};
let calculate = (expr) => {
    console.log(expr);
    return 'calculated';
};
// let expression = "2+-777883*717889";
// let splitUp = expression.match(/[^\d]+|[\d]+/g);
// console.log(splitUp);
//
// function resolveMultiplication(opr1, opr2) {
//     return parseInt(opr1) * parseInt(opr2);
// }
//
// function resolveAddition(opr1, opr2) {
//     return parseInt(opr1) + parseInt(opr2);
// }
//
// for (let i = 0; i < splitUp.length; i++) {
//     if (splitUp[i] === '*') {
//         splitUp[i] = resolveMultiplication(splitUp[i-1], splitUp[i+1]);
//         splitUp.splice(i+1, 1);
//         splitUp.splice(i-1, 1);
//         console.log(splitUp);
//         i = 0;
//     } else if (splitUp[i] === '+') {
//         splitUp[i] = resolveAddition(splitUp[i-1], splitUp[i+1]);
//         console.log(splitUp);
//     }
// }


export {calculate}
