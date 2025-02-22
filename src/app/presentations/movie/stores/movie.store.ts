import { Injectable } from '@angular/core';

import { MovieState } from '../states/movie.state';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { SignalsStore } from 'src/app/shared/base';

@Injectable()
export class MovieStore extends SignalsStore<MovieState> {
  constructor() {
    super(new MovieState());
  }

  markAsLoading(): void {
    this.setState({ errorMessage: '', isLoading: true });
  }

  markAsError(errorMessage: string): void {
    this.setState({ errorMessage, isLoading: false });
  }

  markAsSuccess(): void {
    this.setState({ errorMessage: '', isLoading: false });
  }

  loadMovies(
    movies: Pick<
      MovieEntity,
      'id' | 'posterUrl' | 'releaseDate' | 'type' | 'title'
    >[],
  ): void {
    this.setState({ movies });
  }
}
