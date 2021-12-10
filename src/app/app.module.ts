import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorButtonAreaComponent } from './calculator/calculator-button-area/calculator-button-area.component';
import { CalculatorScreenComponent } from './calculator/calculator-screen/calculator-screen.component';
import { CalculatorButtonComponent } from './calculator/calculator-button-area/calculator-button/calculator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorButtonAreaComponent,
    CalculatorScreenComponent,
    CalculatorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
