import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MovieViewModel } from '../view-models/movie.view-model';
import { MovieStore } from '../stores/movie.store';

import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MovieMapperOmdb } from 'src/app/data/movie/movie.mapper.omdb';
import { MovieRepositoryOmdb } from 'src/app/data/movie/movie.repository.omdb';

@Component({
  imports: [RouterOutlet],
  templateUrl: './movie.component.html',
  providers: [
    MovieStore,
    MovieViewModel,
    MovieMapperOmdb,
    { provide: MovieRepository, useClass: MovieRepositoryOmdb },
  ],
})
export class MovieComponent implements OnInit {
  private readonly movieViewModel = inject(MovieViewModel);

  constructor() {
    
  }
  ngOnInit(): void {
    this.movieViewModel.fetchMovies();
  }
}
