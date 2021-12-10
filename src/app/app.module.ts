import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorBodyComponent } from './calculator/calculator-body/calculator-body.component';
import { CalculatorScreenComponent } from './calculator/calculator-screen/calculator-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorBodyComponent,
    CalculatorScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
