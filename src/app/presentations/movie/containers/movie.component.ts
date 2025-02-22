import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MovieViewModel } from '../view-models/movie.view-model';
import { MovieStore } from '../stores/movie.store';

import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { MovieMapperOmdb } from 'src/app/data/movie/movie.mapper.omdb';
import { MovieRepositoryTmdb } from 'src/app/data/movie/movie.repository.tmdb';
import { MovieMapperTmdb } from 'src/app/data/movie/movie.mapper.tmdb';

@Component({
  imports: [RouterOutlet],
  templateUrl: './movie.component.html',
  providers: [
    MovieStore,
    MovieViewModel,
    MovieMapperOmdb,
    MovieMapperTmdb,
    { provide: MovieRepository, useClass: MovieRepositoryTmdb },
  ],
})
export class MovieComponent {}
