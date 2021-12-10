import {Component, OnDestroy, OnInit} from '@angular/core';
import {CalculatorButtonAreaService} from "../calculator-button-area/calculator-button-area.service";

@Component({
  selector: 'app-calculator-screen',
  templateUrl: './calculator-screen.component.html',
  styleUrls: ['./calculator-screen.component.css']
})
export class CalculatorScreenComponent implements OnInit, OnDestroy {
  input!: string;

  constructor(private buttonService: CalculatorButtonAreaService) {}

  ngOnInit(): void {
    this.buttonService.inputMaker
      .subscribe((value:string) => {
        this.input = value;
      });
  }

  ngOnDestroy() {
    this.buttonService.inputMaker.unsubscribe();
  }
}
