import { Component, Input } from '@angular/core';

import { ButtonDirective } from '../../directives/button';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [ButtonDirective],
})
export class CardComponent {
  @Input() isLoading: boolean = false;
  @Input() image: string = '';
  @Input() rating: string = '';
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() year: string = '';
}
