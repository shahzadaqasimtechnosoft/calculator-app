import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorButtonAreaComponent } from './calculator/calculator-button-area/calculator-button-area.component';
import { CalculatorScreenComponent } from './calculator/calculator-screen/calculator-screen.component';
import { CalculatorButtonComponent } from './calculator/calculator-button-area/calculator-button/calculator-button.component';
import { CalculatorHistoryComponent } from './calculator-history/calculator-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorButtonAreaComponent,
    CalculatorScreenComponent,
    CalculatorButtonComponent,
    CalculatorHistoryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
