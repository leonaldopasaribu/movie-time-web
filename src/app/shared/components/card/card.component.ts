import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() year: string = '';
  @Input() rating: string = '';
}
