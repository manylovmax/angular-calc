import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  value : String = '0';
  secondValue: String = '0';
  operation: String = '';

  clickClear(): void {
    this.value = this.secondValue = '0';
  }

  clickNumber(n: number): void {
    if (this.value == '0') {
      this.value = String(n)
    } else {
      this.value = this.value + String(n)
    }
  }

  clickDot () : void {
    this.value = String(this.value) + '.'
  }

  calcValue() {
    if (this.secondValue == '0')
      return;

    let result: Number = 0;
    if (this.operation === '+') {
      result = Number(this.secondValue) + Number(this.value)
    } else if (this.operation === '-') {
      result = Number(this.secondValue) - Number(this.value)
    } else if (this.operation === '/') {
      result = Number(this.secondValue) / Number(this.value)
    } else if (this.operation === '*') {
      result = Number(this.secondValue) * Number(this.value)
    }

    this.value = String(result)
    this.secondValue = '0';
  }

  clickEquals() {
    this.calcValue()
  }

  clickOperation(operator: String) {
    if (this.secondValue != '0')
      this.calcValue();
    this.operation = operator;
    this.secondValue = this.value;
    this.value = '0';
  }


}
