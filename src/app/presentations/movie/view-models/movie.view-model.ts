import { inject, Injectable, Signal } from '@angular/core';

import { SAMPLE_TITLE } from '../constants/movie.constants';
import { MovieStore } from '../stores/movie.store';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieType } from 'src/app/core/entities/movie-type.enum';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';

@Injectable()
export class MovieViewModel {
  private readonly movieStore = inject(MovieStore);
  private readonly movieRepository = inject(MovieRepository);

  get $isLoading(): Signal<boolean> {
    return this.movieStore.select('isLoading');
  }

  get $isError(): Signal<boolean> {
    return this.movieStore.select('isError');
  }

  get $movies(): Signal<
    Pick<MovieEntity, 'id' | 'posterUrl' | 'releaseDate' | 'type' | 'title'>[]
  > {
    return this.movieStore.select('movies');
  }

  fetchMovies(): void {
    const title = SAMPLE_TITLE;

    this.movieStore.markAsLoading();

    this.movieRepository.fetchMany(title).subscribe({
      next: response => {
        this.movieStore.loadMovies(response);
        this.movieStore.markAsSuccess();
      },
      error: error => {
        this.movieStore.markAsError(error.message);
      },
    });
  }

  fetchMoviesByType(type: MovieType): void {
    this.movieStore.markAsLoading();

    this.movieRepository.fetchMany(type).subscribe({
      next: response => {
        this.movieStore.loadMovies(response);
        this.movieStore.markAsSuccess();
      },
      error: error => {
        this.movieStore.markAsError(error.message);
      },
    });
  }
}
