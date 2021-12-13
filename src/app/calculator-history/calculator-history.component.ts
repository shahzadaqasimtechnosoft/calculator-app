import {Component, OnDestroy, OnInit} from '@angular/core';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {CalculatorButtonAreaService} from "../calculator/calculator-button-area/calculator-button-area.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.css']
})
export class CalculatorHistoryComponent implements OnInit, OnDestroy {
  delete = faTrash;
  expressions: string[] = [];
  buttonServiceSubscription!: Subscription;

  constructor(private buttonService: CalculatorButtonAreaService) { }

  ngOnInit(): void {
    this.buttonServiceSubscription = this.buttonService.expressionEmitter
      .subscribe((expression:string) => {
        this.expressions.push(expression);
      });
  }

  onDeleteAll() {
    this.expressions.splice(0, this.expressions.length);
  }

  ngOnDestroy() {
    this.buttonServiceSubscription.unsubscribe();
  }
}
