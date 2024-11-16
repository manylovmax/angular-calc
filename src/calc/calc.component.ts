import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
  value : string = '0';
  secondValue: string = '0';
  operation: string = '';

  clickClear(): void {
    this.value = this.secondValue = '0';
  }

  clickNumber(n: string): void {
    if (this.value == '0') {
      this.value = n
    } else {
      this.value = this.value + n;
    }
  }

  clickDot () : void {
    this.value = String(this.value) + '.'
  }

  calcValue() {
    if (this.secondValue == '0')
      return;

    let result: number = 0;
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

  clickOperation(operator: string) {
    if (this.secondValue != '0')
      this.calcValue();
    this.operation = operator;
    this.secondValue = this.value;
    this.value = '0';
  }


}
