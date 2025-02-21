import { Component, inject, Signal } from '@angular/core';

import { FilterComponent } from '../components/filter/filter.component';
import { MoviesStore } from '../stores/movies.stores';
import { MoviesViewModel } from '../view-models/movies.view-model';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MovieMapperOmdb } from 'src/app/data/movie/movie.mapper.omdb';
import { MovieRepositoryOmdb } from 'src/app/data/movie/movie.repository.omdb';
import { CardComponent } from 'src/app/shared/components/card';
import { FooterComponent } from 'src/app/shared/components/footer';
import { HeaderComponent } from 'src/app/shared/components/header';
import { ButtonDirective, ButtonTheme } from 'src/app/shared/directives/button';

@Component({
  imports: [
    ButtonDirective,
    CardComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [
    MoviesStore,
    MoviesViewModel,
    MovieMapperOmdb,
    { provide: MovieRepository, useClass: MovieRepositoryOmdb },
  ],
})
export class MoviesComponent {
  readonly buttonTheme: typeof ButtonTheme = ButtonTheme;

  private readonly moviesViewModel = inject(MoviesViewModel);

  $isLoading: Signal<boolean>;
  $isError: Signal<boolean>;
  $movies: Signal<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]
  >;
  selectedSort: 'popularity' | 'releaseDate' = 'popularity';

  constructor() {
    this.$isLoading = this.moviesViewModel.$isLoading;
    this.$isError = this.moviesViewModel.$isError;
    this.$movies = this.moviesViewModel.$movies;
  }

  ngOnInit(): void {
    this.moviesViewModel.fetchMovies();
  }
}
