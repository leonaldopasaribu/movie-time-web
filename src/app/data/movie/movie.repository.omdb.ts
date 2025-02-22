import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { MovieDtoOmdb } from './movie.dto.omdb';
import { MovieMapperOmdb } from './movie.mapper.omdb';
import { FetchResponseOmdbDto } from '../base/response.model';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { environment } from 'src/environments/environment'; // Fixed import

@Injectable()
export class MovieRepositoryOmdb<
  TEntity extends MovieEntity,
> extends MovieRepository {
  private readonly http = inject(HttpClient);
  private readonly mapper = inject(MovieMapperOmdb<TEntity>);

  private readonly baseUrl: string;

  constructor() {
    super();
    this.baseUrl = `${environment.omdbApiUrl}/?apikey=${environment.apiKey}`;
  }

  override fetchOne<TKeyword>(imdbID: TKeyword): Observable<TEntity> {
    return this.http
      .get<MovieDtoOmdb>(`${this.baseUrl}&i=${imdbID}`)
      .pipe(map(dto => this.mapper.toEntity(dto)));
  }

  override fetchMany<TKeyword>(title: TKeyword): Observable<TEntity[]> {
    return this.http
      .get<FetchResponseOmdbDto<MovieDtoOmdb[]>>(`${this.baseUrl}&s=${title}`)
      .pipe(
        map(({ Search }) =>
          Search.map(search => {
            const { title, releaseDate, imdbID, type, posterUrl } =
              this.mapper.toEntity(search);
            return { title, releaseDate, imdbID, type, posterUrl } as TEntity;
          }),
        ),
      );
  }
}
