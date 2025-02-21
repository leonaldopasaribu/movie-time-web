import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  imports: [CommonModule],
})
export class FilterComponent {
  sortOptions = [
    'Popularity Ascending',
    'Populariy Descending',
    'Release Date Ascending',
    'Release Date Descending',
    'Rating Ascending',
    'Rating Descending',
  ];
  selectedSort = 'Popularity';

  genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
  ];

  selectedGenres: Set<string> = new Set();

  toggleGenre(genre: string) {
    if (this.selectedGenres.has(genre)) {
      this.selectedGenres.delete(genre);
    } else {
      this.selectedGenres.add(genre);
    }
  }
}
