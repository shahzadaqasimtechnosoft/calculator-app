import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ErrorService} from "./error.service";
import {Subscription} from "rxjs";
import {CalculatorButtonAreaService} from "./calculator/calculator-button-area/calculator-button-area.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'calculator-app';
  errorMessage: string = '';
  errorHeading: string = '';
  isError: boolean = false;
  errorSubscription!: Subscription;

  constructor(private errorService: ErrorService, private buttonService: CalculatorButtonAreaService) {}

  ngOnInit() {
    this.errorSubscription = this.errorService.errorEmitter
      .subscribe((error: {error: string, message: string}) => {
        this.isError = true;
        this.errorHeading = error.error;
        this.errorMessage = error.message;
      });
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

  onErrorHandle() {
    this.isError = false;
    this.errorHeading = '';
    this.errorMessage = '';
  }

  @HostListener('window:keyup', ['$event'])
  onKeyPressed(event: KeyboardEvent) {
    console.log(event);
    if (event.key !== 'Shift') {
      this.buttonService.onInputFromKeyboard(event.key);
    }
  }
}
