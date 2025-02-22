import { Injectable } from '@angular/core';

import { MovieDtoTmdb } from './movie.dto.tmdb';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { EntityMapper } from 'src/app/shared/base/mapper';

import { environment } from 'src/environments/environment';

@Injectable()
export class MovieMapperTmdb<T extends Partial<MovieEntity>>
  implements EntityMapper<MovieDtoTmdb, T>
{
  toEntity(dto: MovieDtoTmdb): T {
    return {
      backdropUrl: dto.backdrop_path,
      boxOffice: dto.budget,
      id: dto.id,
      language: dto.original_language,
      plot: dto.overview,
      posterUrl: environment.tmdbImageUrl + dto.poster_path,
      rating: dto.vote_average,
      releaseDate: dto.release_date,
      status: dto.status,
      title: dto.title,
      votes: dto.vote_count,
    } as unknown as T;
  }
}
