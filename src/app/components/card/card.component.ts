import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() property: string = '';
  @Input() propertyValue: number = 0;

  ngOnChanges(): void {}
}
