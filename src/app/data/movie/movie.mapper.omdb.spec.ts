import { TestBed } from '@angular/core/testing';

import { MovieMapperOmdb } from './movie.mapper.omdb';
import { MovieDtoOmdb } from './movie.dto.omdb';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MOVIE_DTO_OMDB_MOCK } from 'src/app/shared/mocks/movie.mock';

describe('MovieMapperOmdb', () => {
  let mapper: MovieMapperOmdb;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieMapperOmdb],
    });
    mapper = TestBed.inject(MovieMapperOmdb);
  });

  it('should be created', () => {
    expect(mapper).toBeTruthy();
  });

  it('should map MovieDtoOmdb to MovieEntity correctly', () => {
    const dto: MovieDtoOmdb = MOVIE_DTO_OMDB_MOCK;

    const entity: MovieEntity = mapper.toEntity(dto);

    expect(entity).toEqual({
      imdbID: dto.imdbID,
      poster: dto.Poster,
      title: dto.Title,
      type: dto.Type,
      year: dto.Year,
      ratings: dto.Ratings,
      rated: dto.Rated,
      released: dto.Released,
      runtime: dto.Runtime,
      genre: dto.Genre,
      director: dto.Director,
      writer: dto.Writer,
      actors: dto.Actors,
      plot: dto.Plot,
      language: dto.Language,
      country: dto.Country,
      awards: dto.Awards,
      metascore: dto.Metascore,
      imdbRating: dto.imdbRating,
      imdbVotes: dto.imdbVotes,
      dvd: dto.DVD,
      boxOffice: dto.BoxOffice,
      production: dto.Production,
      website: dto.Website,
      response: dto.Response,
    });
  });
});
