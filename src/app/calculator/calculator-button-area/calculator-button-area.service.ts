import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

import {CalculatorButton} from "./calculator-button/calculator-button.model";

@Injectable({providedIn: 'root'})
export class CalculatorButtonAreaService {
  private input: string = '';
  inputMaker = new Subject<string>();
  expressionEmitter = new Subject<string>();

  private buttons: CalculatorButton[] = [
    new CalculatorButton('1', 'number'),
    new CalculatorButton('2', 'number'),
    new CalculatorButton('3', 'number'),
    new CalculatorButton('+', 'operation'),
    new CalculatorButton('4', 'number'),
    new CalculatorButton('5', 'number'),
    new CalculatorButton('6', 'number'),
    new CalculatorButton('-', 'operation'),
    new CalculatorButton('7', 'number'),
    new CalculatorButton('8', 'number'),
    new CalculatorButton('9', 'number'),
    new CalculatorButton('*', 'operation'),
    new CalculatorButton('C', 'cancel'),
    new CalculatorButton('0', 'number'),
    new CalculatorButton('=', 'number'),
    new CalculatorButton('/', 'operation')
  ];

  constructor() {}

  getButtons(): CalculatorButton[] {
    return this.buttons;
  }

  addToInput(value: string) {
    if (value === '=') {
      const inputExpression = this.input;
      this.input = eval(this.input);
      this.expressionEmitter.next(inputExpression + " = " + this.input);
    } else if (value === 'C') {
      this.input = '';
    } else {
      this.input = this.input + value;
    }
    this.inputMaker.next(this.input);
  }
}
