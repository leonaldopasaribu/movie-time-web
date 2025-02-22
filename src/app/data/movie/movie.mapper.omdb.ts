import { Injectable } from '@angular/core';

import { EntityMapper } from 'src/app/shared/base';
import { MovieDtoOmdb } from './movie.dto.omdb';
import { MovieEntity } from 'src/app/core/entities/movie.entity';

@Injectable()
export class MovieMapperOmdb
  implements EntityMapper<MovieDtoOmdb, MovieEntity>
{
  toEntity(dto: MovieDtoOmdb): MovieEntity {
    return {
      backdropUrl: '',
      rating: 0,
      imdbID: dto.imdbID,
      posterUrl: dto.Poster,
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
    };
  }
}
