import {Injectable} from "@angular/core";
import {CalculatorButton} from "./calculator-button/calculator-button.model";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class CalculatorButtonAreaService {
  inputMaker = new Subject<string>();

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

  getButtons(): CalculatorButton[] {
    return this.buttons;
  }

  addToInput(value: string) {
    this.inputMaker.next(value);
  }
}
