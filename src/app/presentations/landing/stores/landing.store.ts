import { Injectable } from '@angular/core';

import { LandingState } from '../states/landing.state';

import { MovieEntity } from 'src/app/core/entities/movie.entity';

import { SignalsStore } from 'src/app/shared/base';

@Injectable()
export class LandingStore extends SignalsStore<LandingState> {
  constructor() {
    super(new LandingState());
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

  loadMovies(movies: Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]): void {
    this.setState({ movies });
  }
}
