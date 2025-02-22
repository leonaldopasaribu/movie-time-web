import { Component, inject, OnInit, Signal } from '@angular/core';

import { MoviesGridComponent } from '../components/movies-grid/movies-grid.component';
import { MovieViewModel } from '../view-models/movie.view-model';
import { LandingViewModel } from '../view-models/landing.view-model';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ButtonDirective, ButtonTheme } from 'src/app/shared/directives/button';

@Component({
  imports: [
    ButtonDirective,
    FooterComponent,
    HeaderComponent,
    MoviesGridComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [LandingViewModel, MovieViewModel],
})
export class LandingComponent implements OnInit {
  readonly buttonTheme: typeof ButtonTheme = ButtonTheme;

  private readonly landingViewModel = inject(LandingViewModel);
  private readonly movieViewModel = inject(MovieViewModel);

  $isLoading: Signal<boolean>;
  $isError: Signal<boolean>;
  $movies: Signal<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'posterUrl'>[]
  >;
  selectedSort: 'popularity' | 'releaseDate' = 'popularity';

  constructor() {
    this.$isLoading = this.movieViewModel.$isLoading;
    this.$isError = this.movieViewModel.$isError;
    this.$movies = this.movieViewModel.$movies;
  }

  get isPopularitySort(): boolean {
    return this.selectedSort === 'popularity';
  }

  get isReleaseDateSort(): boolean {
    return this.selectedSort === 'releaseDate';
  }

  ngOnInit(): void {
    this.movieViewModel.fetchMovies();
  }

  onSortButtonClick(sortType: 'popularity' | 'releaseDate') {
    this.selectedSort = sortType;
  }

  onViewButtonClick(imdbID: string): void {
    this.landingViewModel.navigateToDetail(imdbID);
  }
}
