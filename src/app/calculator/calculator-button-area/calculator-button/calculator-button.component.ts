import {Component, Input, OnInit} from '@angular/core';
import {CalculatorButtonAreaService} from "../calculator-button-area.service";
import {CalculatorButton} from "./calculator-button.model";

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent implements OnInit {
  @Input('value') button!: CalculatorButton;

  constructor(private buttonService: CalculatorButtonAreaService) { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.buttonService.addToInput(this.button);
  }
}
