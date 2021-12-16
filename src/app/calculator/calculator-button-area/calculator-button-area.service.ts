import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

import {CalculatorButton} from "./calculator-button/calculator-button.model";
import {ErrorService} from "../../error.service";

@Injectable({providedIn: 'root'})
export class CalculatorButtonAreaService {
  private allowedInputLength = 20;
  private input = '';
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

  constructor(private errorService: ErrorService) {}

  getButtons(): CalculatorButton[] {
    return this.buttons;
  }

  addToInput(value: string) {
    if (this.input.length > (this.allowedInputLength - 1)) {
      this.input = ''
      this.errorService.emitError('Input Exceeded Limit', `Input exceeded the limit of ${this.allowedInputLength} characters. Please make sure you add no more than ${this.allowedInputLength} characters.`)
    } else if (value === '=') {
      const inputExpression = this.input;
      this.input = eval(this.input);
      if (this.input.toString() === Infinity.toString()) {
        this.input = 'Math Error';
        this.expressionEmitter.next(inputExpression + ' (Math Error)');
      } else {
        this.expressionEmitter.next(inputExpression + " = " + this.input);
      }
    } else if (value === 'C') {
      this.input = '';
    } else {
      this.input = this.input + value;
    }
    this.inputMaker.next(this.input);
  }
}
