import { Component, input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
})
export class ReviewCardComponent {
  readonly date = input<string>('');
  readonly highlightMessage = input<string>('');
  readonly isLoading = input<boolean>(false);
  readonly message = input<string>('');
  readonly name = input<string>('');
  readonly rating = input<string>('');
}
