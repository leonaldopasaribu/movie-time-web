import { Component, inject, Signal } from '@angular/core';

import { FilterComponent } from '../components/filter/filter.component';
import { MoviesGridComponent } from '../components/movies-grid/movies-grid.component';
import { MovieViewModel } from '../view-models/movie.view-model';
import { MoviesViewModel } from '../view-models/movies.view-model';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { FooterComponent } from 'src/app/shared/components/footer';
import { HeaderComponent } from 'src/app/shared/components/header';
import { ButtonDirective, ButtonTheme } from 'src/app/shared/directives/button';

@Component({
  imports: [
    ButtonDirective,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    MoviesGridComponent,
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MoviesViewModel],
})
export class MoviesComponent {
  readonly buttonTheme: typeof ButtonTheme = ButtonTheme;

  private readonly movieViewModel = inject(MovieViewModel);
  private readonly moviesViewModel = inject(MoviesViewModel);

  $isLoading: Signal<boolean>;
  $isError: Signal<boolean>;
  $movies: Signal<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]
  >;
  selectedSort: 'popularity' | 'releaseDate' = 'popularity';

  constructor() {
    this.$isLoading = this.movieViewModel.$isLoading;
    this.$isError = this.movieViewModel.$isError;
    this.$movies = this.movieViewModel.$movies;
  }

  ngOnInit(): void {
    this.movieViewModel.fetchMovies();
  }

  onViewButtonClick(imdbID: string): void {
    this.moviesViewModel.navigateToDetail(imdbID);
  }
}
