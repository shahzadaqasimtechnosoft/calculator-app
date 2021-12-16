import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

import {CalculatorButton} from "./calculator-button/calculator-button.model";
import {ErrorService} from "../../error.service";
import buttons from "./calculator-buttons.json"

@Injectable({providedIn: 'root'})
export class CalculatorButtonAreaService {
  private buttons:CalculatorButton[] = buttons;
  private allowedInputLength = 20;
  private input = '';
  inputMaker = new Subject<string>();
  expressionStore = new Subject<string>();

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
    } else {
      this.input = this.input + buttonClicked.value;
    }

    this.inputMaker.next(this.input);
  }
}
