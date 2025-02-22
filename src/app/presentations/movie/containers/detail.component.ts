import { Component, computed, inject, OnInit, Signal } from '@angular/core';

import { MoviesGridComponent } from '../components/movies-grid/movies-grid.component';
import { RECOMENDATIONS_MOVIES_LIMIT } from '../constants/movie.constants';
import { Review } from '../models/review.model';
import { DetailStore } from '../stores/detail.store';
import { DetailViewModel } from '../view-models/detail.view-model';
import { MovieViewModel } from '../view-models/movie.view-model';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MovieMapperOmdb } from 'src/app/data/movie/movie.mapper.omdb';
import { MovieRepositoryOmdb } from 'src/app/data/movie/movie.repository.omdb';
import { FooterComponent } from 'src/app/shared/components/footer';
import { HeaderComponent } from 'src/app/shared/components/header';
import { ReviewCardComponent } from 'src/app/shared/components/review-card';

@Component({
  templateUrl: './detail.component.html',
  imports: [
    FooterComponent,
    HeaderComponent,
    MoviesGridComponent,
    ReviewCardComponent,
  ],
  providers: [
    DetailStore,
    DetailViewModel,
    MovieViewModel,
    MovieMapperOmdb,
    { provide: MovieRepository, useClass: MovieRepositoryOmdb },
  ],
})
export class DetailComponent implements OnInit {
  private readonly detailViewModel = inject(DetailViewModel);
  private readonly movieViewModel = inject(MovieViewModel);

  $isLoadingDetail: Signal<boolean>;
  $isLoadingRecomendations: Signal<boolean>;
  $isError: Signal<boolean>;
  $movie: Signal<MovieEntity>;
  $movies: Signal<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]
  >;
  reviews: Review[];

  constructor() {
    this.$isLoadingDetail = this.detailViewModel.$isLoading;
    this.$isLoadingRecomendations = this.movieViewModel.$isLoading;
    this.$isError = this.movieViewModel.$isError;
    this.$movie = this.detailViewModel.$movie;
    this.$movies = computed(() =>
      this.movieViewModel.$movies().slice(0, RECOMENDATIONS_MOVIES_LIMIT),
    );
    this.reviews = this.detailViewModel.reviews;
  }

  ngOnInit(): void {
    this.detailViewModel.fetchMovie();
    this.movieViewModel.fetchMovies();
    this.detailViewModel.subscribeToParamsMap();
  }

  onViewButtonClick(imdbID: string): void {
    this.detailViewModel.navigateToDetail(imdbID);
    this.detailViewModel.fetchMovie();
  }
}
