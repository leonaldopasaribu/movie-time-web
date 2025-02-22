import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
})
export class ReviewCardComponent {
  @Input() name: string = '';
  @Input() date: string = '';
  @Input() highlightMessage: string = '';
  @Input() message: string = '';
  @Input() rating: string = '';
}
