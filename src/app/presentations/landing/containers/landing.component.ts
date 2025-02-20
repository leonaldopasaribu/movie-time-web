import { Component, inject, OnInit, Signal } from '@angular/core';

import { LandingStore } from '../stores/landing.store';
import { LandingViewModel } from '../view-models/landing.view-model';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MovieMapperOmdb } from 'src/app/data/movie/movie.mapper.omdb';
import { MovieRepositoryOmdb } from 'src/app/data/movie/movie.repository.omdb';

import { CardComponent } from 'src/app/shared/components/card';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ButtonDirective, ButtonTheme } from 'src/app/shared/directives/button';

@Component({
  selector: 'app-landing',
  imports: [ButtonDirective, CardComponent, FooterComponent, HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [
    LandingStore,
    LandingViewModel,
    MovieMapperOmdb,
    { provide: MovieRepository, useClass: MovieRepositoryOmdb },
  ],
})
export class LandingComponent implements OnInit {
  readonly buttonTheme: typeof ButtonTheme = ButtonTheme;

  private readonly landingViewModel = inject(LandingViewModel);

  $isLoading: Signal<boolean>;
  $isError: Signal<boolean>;
  $movies: Signal<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]
  >;
  selectedSort: 'popularity' | 'releaseDate' = 'popularity';

  constructor() {
    this.$isLoading = this.landingViewModel.$isLoading;
    this.$isError = this.landingViewModel.$isError;
    this.$movies = this.landingViewModel.$movies;
  }

  ngOnInit(): void {
    this.landingViewModel.fetchMovies();
  }

  onSortButtonClick(sortType: 'popularity' | 'releaseDate') {
    this.selectedSort = sortType;
  }
}
