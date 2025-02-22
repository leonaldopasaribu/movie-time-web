import { inject, Injectable, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieViewModel } from './movie.view-model';

import { REVIEWS } from '../constants/movie.constants';
import { Review } from '../models/review.model';
import { DetailStore } from '../stores/detail.store';

import { MovieType } from 'src/app/core/entities/movie-type.enum';
import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MOVIES_ROUTE_URL } from 'src/app/shared/constants/route-url.constants';

@Injectable()
export class DetailViewModel {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly detailStore = inject(DetailStore);
  private readonly movieViewModel = inject(MovieViewModel);
  private readonly movieRepository = inject(MovieRepository);
  private readonly router = inject(Router);

  get $isLoading(): Signal<boolean> {
    return this.detailStore.select('isLoading');
  }

  get $isError(): Signal<boolean> {
    return this.detailStore.select('isError');
  }

  get $movie(): Signal<MovieEntity> {
    return this.detailStore.select('movie');
  }

  get reviews(): Review[] {
    return REVIEWS;
  }

  fetchMovie(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';

    this.detailStore.markAsLoading();

    this.movieRepository.fetchOne(id).subscribe({
      next: response => {
        this.detailStore.loadMovie(response);
        this.detailStore.markAsSuccess();
      },
      error: error => {
        this.detailStore.markAsError(error.message);
      },
    });
  }

  fetchTopRatedMovies(): void {
    const movieType = MovieType.TopRated;
    this.movieViewModel.fetchMoviesByType(movieType);
  }

  navigateToDetail(id: string): void {
    this.router.navigate([MOVIES_ROUTE_URL, id]).then(this.scrollToTop);
  }

  subscribeToParamsMap(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.fetchMovie();
    });
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
