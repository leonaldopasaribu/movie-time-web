import { Injectable } from '@angular/core';
import { EntityMapper } from 'src/app/shared/base';
import { MovieDtoOmdb } from './movie.dto.omdb';
import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { RatingEntity } from 'src/app/core/entities/rating.entity';

@Injectable()
export class MovieMapperOmdb<T extends Partial<MovieEntity>>
  implements EntityMapper<MovieDtoOmdb, T>
{
  toEntity(dto: MovieDtoOmdb): T {
    return {
      id: dto.imdbID,
      actors: dto.Actors,
      awards: dto.Awards,
      backdropUrl: '',
      boxOffice: dto.BoxOffice,
      country: dto.Country,
      director: dto.Director,
      dvd: dto.DVD,
      genre: dto.Genre,
      genres: [],
      imdbID: dto.imdbID,
      imdbRating: dto.imdbRating,
      votes: 0,
      language: dto.Language,
      metascore: dto.Metascore,
      posterUrl: dto.Poster,
      plot: dto.Plot,
      production: dto.Production,
      rated: dto.Rated,
      rating: 0,
      ratings: dto.Ratings,
      releaseDate: dto.Year,
      response: dto.Response,
      runtime: dto.Runtime,
      status: dto.Released,
      title: dto.Title,
      type: dto.Type,
      website: dto.Website,
      writer: dto.Writer,
    } as unknown as T;
  }
}
