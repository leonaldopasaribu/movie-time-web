import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MovieViewModel } from './movie.view-model';

import { MovieType } from 'src/app/core/entities/movie-type.enum';
import { MOVIES_ROUTE_URL } from 'src/app/shared/constants/route-url.constants';

@Injectable()
export class MoviesViewModel {
  private readonly movieViewModel = inject(MovieViewModel);
  private readonly router = inject(Router);

  fetchPopularMovies(): void {
    const movieType = MovieType.Popular;
    this.movieViewModel.fetchMoviesByType(movieType);
  }

  navigateToDetail(id: string): void {
    this.router.navigateByUrl(`${MOVIES_ROUTE_URL}/${id}`);
  }
}
