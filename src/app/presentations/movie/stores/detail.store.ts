import { Injectable } from '@angular/core';

import { DetailState } from '../states/detail.state';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { SignalsStore } from 'src/app/shared/base';

@Injectable()
export class DetailStore extends SignalsStore<DetailState> {
  constructor() {
    super(new DetailState());
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

  loadMovie(movie: MovieEntity): void {
    this.setState({ movie });
  }
}
