import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent  {
  @Input() property: string = '';
  @Input() propertyValue: number = 0;

  constructor(){}

  calcularCor(): string {
    const r = Math.round(200 - this.propertyValue * 2.55);
    const g = Math.round(180 - this.propertyValue * 2.55);
    const b = 220;
    return `rgb(${r}, ${g}, ${b})`;

  }

}
