import {Component, Input, OnInit} from '@angular/core';
import {CalculatorButtonAreaService} from "../calculator-button-area.service";

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent implements OnInit {
  @Input('type') type!: string;
  @Input('value') value!:string;

  constructor(private buttonService: CalculatorButtonAreaService) { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.buttonService.addToInput(this.value);
  }
}
