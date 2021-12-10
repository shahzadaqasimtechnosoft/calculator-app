import {Injectable} from "@angular/core";
import {Button} from "./calculator-button/button.model";

@Injectable({providedIn: 'root'})
export class ButtonAreaService {
  private buttons: Button[] = [
    new Button('1', 'number'),
    new Button('2', 'number'),
    new Button('3', 'number'),
    new Button('+', 'operation'),
    new Button('4', 'number'),
    new Button('5', 'number'),
    new Button('6', 'number'),
    new Button('-', 'operation'),
    new Button('7', 'number'),
    new Button('8', 'number'),
    new Button('9', 'number'),
    new Button('*', 'operation'),
    new Button('C', 'cancel'),
    new Button('0', 'number'),
    new Button('=', 'number'),
    new Button('/', 'operation')
  ];

  getButtons(): Button[] {
    return this.buttons;
  }
}
