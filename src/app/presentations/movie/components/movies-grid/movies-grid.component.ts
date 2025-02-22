import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { CardComponent } from 'src/app/shared/components/card';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  imports: [CardComponent, NgClass],
})
export class MoviesGridComponent {
  @Input() isLoading = false;
  @Input() movies: Pick<
    MovieEntity,
    'title' | 'year' | 'imdbID' | 'type' | 'posterUrl'
  >[] = [];
  @Input() numberOfGrid = 7;
  @Output() clicked = new EventEmitter<string>();

  onViewButtonClick(imdbID: string): void {
    this.clicked.emit(imdbID);
  }
}
