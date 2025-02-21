import { inject, Injectable, Signal } from '@angular/core';

import { SAMPLE_TITLE } from '../constants/movie.constants'
import { MoviesStore } from '../stores/movies.stores'

import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MovieEntity } from 'src/app/core/entities/movie.entity';

@Injectable()
export class MoviesViewModel {
  private readonly moviesStore = inject(MoviesStore);
  private readonly movieRepository = inject(MovieRepository);

  get $isLoading(): Signal<boolean> {
    return this.moviesStore.select('isLoading');
  }

  get $isError(): Signal<boolean> {
    return this.moviesStore.select('isError');
  }

  get $movies(): Signal<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]
  > {
    return this.moviesStore.select('movies');
  }

  fetchMovies(): void {
    const title = SAMPLE_TITLE;

    this.moviesStore.markAsLoading();

    this.movieRepository.fetchMany(title).subscribe({
      next: response => {
        this.moviesStore.loadMovies(response);
        this.moviesStore.markAsSuccess();
      },
      error: error => {
        this.moviesStore.markAsError(error.message);
      },
    });
  }
}
