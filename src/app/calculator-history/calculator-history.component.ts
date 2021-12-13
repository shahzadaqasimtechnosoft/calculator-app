import { Component, OnInit } from '@angular/core';
import {faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.css']
})
export class CalculatorHistoryComponent implements OnInit {
  delete = faTrash;
  expressions: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteAll() {
    this.expressions.splice(0, this.expressions.length);
  }
}
