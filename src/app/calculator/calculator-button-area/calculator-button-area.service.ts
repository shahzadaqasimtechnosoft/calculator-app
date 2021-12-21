import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

import {CalculatorButton} from "./calculator-button/calculator-button.model";
import {ErrorService} from "../../error.service";
import buttons from "./calculator-buttons.json"

@Injectable({providedIn: 'root'})
export class CalculatorButtonAreaService {
  private buttons: CalculatorButton[] = buttons;
  private allowedInputLength = 20;
  private input = '';
  private allowZero = false;
  private significantDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  private operations = ['+', '-', '*', '/'];
  private previousButtonClicked = new CalculatorButton('', '');
  inputMaker = new Subject<string>();
  expressionStore = new Subject<string>();

  constructor(private errorService: ErrorService) {
  }

  getButtons(): CalculatorButton[] {
    return this.buttons;
  }

  private evaluate(): void {
    const inputExpression = this.input;
    console.log(inputExpression);
    this.input = eval(inputExpression);
    console.log(this.input);
    if (this.input.toString() === Infinity.toString()) {
      this.input = 'Math Error';
      this.expressionStore.next(`${inputExpression} (Math Error)`);
    } else {
      this.expressionStore.next(`${inputExpression} = ${this.input}`);
    }
  }

  private getButtonClassFromValue(value: string): string {
    if (this.significantDigits.includes(value) || value === '0' || value === '=' || value === 'Enter') {
      return 'number';
    } else if (this.operations.includes(value)) {
      return 'operation';
    } else if (value === 'C' || value === 'c') {
      return 'cancel';
    }
    return 'other';
  }

  onInputFromKeyboard(value: string) {
    this.addToInput(new CalculatorButton(value, this.getButtonClassFromValue(value)));
  }

  addToInput(buttonClicked: CalculatorButton) {
    if (this.input.length > (this.allowedInputLength - 1)) {
      this.input = '';
      this.errorService.emitError('Input Exceeded Limit', `Input exceeded the limit of ${this.allowedInputLength} characters. Please make sure you add no more than ${this.allowedInputLength} characters.`);
      this.inputMaker.next(this.input);
      return;
    }

    if (buttonClicked.cssClass === 'other') {
      console.log('Other character');
      this.errorService.emitError('Invalid Character', 'Please input a valid character (that is present on the calculator).');
      return;
    }

    if ((this.previousButtonClicked.cssClass !== 'number' && buttonClicked.cssClass !== 'number') && buttonClicked.cssClass !== 'cancel') {
      this.input = '';
      this.errorService.emitError('Operator Error', "Please make sure you use single operators e.g, +, -, etc. NOT +-, *-, etc. AND you don't use operators without operands e.g, +, *, etc.");
      this.inputMaker.next(this.input);
      return;
    }

    if (this.significantDigits.includes(buttonClicked.value)) {
      this.allowZero = true;
    } else if (buttonClicked.cssClass !== 'number') {
      this.allowZero = false;
    }

    if ((this.previousButtonClicked.value === '0' && buttonClicked.cssClass === 'number')) {
      if (!this.allowZero) {
        if (buttonClicked.value !== '=') {
          return;
        }
      }
      if (buttonClicked.value !== '0' && buttonClicked.value !== '=' && this.operations.includes(this.input[this.input.length - 2])) {
        this.input = this.input.slice(0, -1);
      }
    }

    if (buttonClicked.value === '=' || buttonClicked.value === 'Enter') {
      console.log(this.input);
      this.evaluate();
    } else if (buttonClicked.value === 'C' || buttonClicked.value === 'c') {
      this.input = '';
    } else {
      this.input = this.input + buttonClicked.value;
    }

    this.previousButtonClicked = buttonClicked;
    this.inputMaker.next(this.input);
  }
}
