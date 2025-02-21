import { inject, Injectable, Signal } from '@angular/core';

import { SAMPLE_TITLE } from '../constants/movie.constants';
import { LandingStore } from '../stores/landing.store';

import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MovieEntity } from 'src/app/core/entities/movie.entity';

@Injectable()
export class LandingViewModel {
  private readonly landingStore = inject(LandingStore);
  private readonly movieRepository = inject(MovieRepository);

  get $isLoading(): Signal<boolean> {
    return this.landingStore.select('isLoading');
  }

  get $isError(): Signal<boolean> {
    return this.landingStore.select('isError');
  }

  get $movies(): Signal<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]
  > {
    return this.landingStore.select('movies');
  }

  fetchMovies(): void {
    const title = SAMPLE_TITLE;

    this.landingStore.markAsLoading();

    this.movieRepository.fetchMany(title).subscribe({
      next: response => {
        this.landingStore.loadMovies(response);
        this.landingStore.markAsSuccess();
      },
      error: error => {
        this.landingStore.markAsError(error.message);
      },
    });
  }
}
