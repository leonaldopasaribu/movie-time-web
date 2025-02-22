import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonDirective } from '../../directives/button';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [ButtonDirective],
})
export class CardComponent {
  @Input() id: string = '';
  @Input() isLoading: boolean = false;
  @Input() image: string = '';
  @Input() rating: string = '';
  @Input() releaseDate: string = '';
  @Input() title: string = '';
  @Input() type: string = '';
  @Output() clicked = new EventEmitter<string>();

  onViewButtonClick(imdbID: string): void {
    this.clicked.emit(imdbID);
  }
}
