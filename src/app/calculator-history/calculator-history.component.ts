import {Component, OnDestroy, OnInit} from '@angular/core';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {CalculatorButtonAreaService} from "../calculator/calculator-button-area/calculator-button-area.service";
import {Subscription} from "rxjs";
import {ExpressionStoreService} from "./expression-store.service";
import {ErrorService} from "../error.service";

@Component({
  selector: 'app-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.css']
})
export class CalculatorHistoryComponent implements OnInit, OnDestroy {
  delete = faTrash;
  expressions: string[] = [];
  buttonServiceSubscription!: Subscription;
  retrieveAllSubscription!: Subscription;
  persistSubscription!: Subscription;

  constructor(private buttonService: CalculatorButtonAreaService,
              private persistenceService: ExpressionStoreService,
              private errorService: ErrorService) { }

  ngOnInit(): void {
    this.retrieveAllSubscription = this.persistenceService.retrieveAll()
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
          this.expressions = responseData.map((expr:any) => expr.expression);
        },
        error: (error) => {
          console.log(error);
          this.errorService.emitError(error.name, error.message + ' (error occurred while retrieving)');
        }
      });
    this.buttonServiceSubscription = this.buttonService.expressionEmitter
      .subscribe((expression:string) => {
        this.expressions.push(expression);
        this.persistSubscription = this.persistenceService.persist(expression)
          .subscribe(
            {
              next: (responseData) => {
                console.log(responseData);
              },
              error: (error) => {
                console.log(error);
                this.errorService.emitError(error.name, error.message + ' (error occurred while persisting)');
              }
            }
          );
      });
  }

  onDeleteAll() {
    this.expressions.splice(0, this.expressions.length);
    this.persistenceService.clearAll();
  }

  ngOnDestroy() {
    this.retrieveAllSubscription.unsubscribe();
    this.persistSubscription.unsubscribe();
    this.buttonServiceSubscription.unsubscribe();
  }
}
