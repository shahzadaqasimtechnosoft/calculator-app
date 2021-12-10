import { Component, OnInit } from '@angular/core';
import {CalculatorButtonAreaService} from "./calculator-button-area.service";
import {CalculatorButton} from "./calculator-button/calculator-button.model";

@Component({
  selector: 'app-calculator-button-area',
  templateUrl: './calculator-button-area.component.html',
  styleUrls: ['./calculator-button-area.component.css']
})
export class CalculatorButtonAreaComponent implements OnInit {
  buttons!: CalculatorButton[];

  constructor(private buttonService: CalculatorButtonAreaService) { }

  ngOnInit(): void {
    this.buttons = this.buttonService.getButtons();
  }
}
