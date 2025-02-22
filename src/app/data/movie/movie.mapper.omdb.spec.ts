import { TestBed } from '@angular/core/testing';

import { MovieMapperOmdb } from './movie.mapper.omdb';
import { MovieDtoOmdb } from './movie.dto.omdb';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import {
  MOVIE_DTO_OMDB_MOCK,
  MOVIE_ENTITY_MOCK,
} from 'src/app/shared/mocks/movie.mock';

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

    expect(entity).toEqual(MOVIE_ENTITY_MOCK);
  });
});
