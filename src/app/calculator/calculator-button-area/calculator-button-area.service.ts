import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

import {CalculatorButton} from "./calculator-button/calculator-button.model";
import {ErrorService} from "../../error.service";

@Injectable({providedIn: 'root'})
export class CalculatorButtonAreaService {
  private allowedInputLength = 20;
  private input = '';
  private isSignificantZero = false;
  private firstZero = false;
  private previousButtonClicked = new CalculatorButton('', '');
  inputMaker = new Subject<string>();
  expressionStore = new Subject<string>();

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
    new CalculatorButton('=', 'equal'),
    new CalculatorButton('/', 'operation')
  ];

  constructor(private errorService: ErrorService) {}

  getButtons(): CalculatorButton[] {
    return this.buttons;
  }

  private evaluate(): void {
    const inputExpression = this.input;
    this.input = eval(inputExpression);
    if (this.input.toString() === Infinity.toString()) {
      this.input = 'Math Error';
      this.expressionStore.next(`${inputExpression} (Math Error)`);
    } else {
      this.expressionStore.next(`${inputExpression} = ${this.input}`);
    }
  }

  addToInput(buttonClicked: CalculatorButton) {
    if (this.input.length > (this.allowedInputLength - 1)) {
      this.input = '';
      this.errorService.emitError('Input Exceeded Limit', `Input exceeded the limit of ${this.allowedInputLength} characters. Please make sure you add no more than ${this.allowedInputLength} characters.`);
      this.inputMaker.next(this.input);
      return;
    }

    if (buttonClicked.value === '=') {
      this.evaluate();
    } else if (buttonClicked.value === 'C') {
      this.input = '';
    } else if (buttonClicked.value == '0' && !this.isSignificantZero) {
      return;
    } else {
      this.input = this.input + buttonClicked.value;
    }

    this.previousButtonClicked = buttonClicked;
    this.inputMaker.next(this.input);
  }
}
