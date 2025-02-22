import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { AUTHORIZATION_HEADER } from 'src/app/shared/constants/authorization.constants';
import { environment } from 'src/environments/environment';
import { FetchResponseTmdbDto } from '../base/response.model';
import { MovieDtoTmdb } from './movie.dto.tmdb';
import { MovieMapperTmdb } from './movie.mapper.tmdb';

@Injectable()
export class MovieRepositoryTmdb<
  TEntity extends MovieEntity,
> extends MovieRepository {
  private readonly baseUrl: string;
  private readonly apiVersion: number;

  constructor(
    private http: HttpClient,
    private mapper: MovieMapperTmdb<TEntity>,
  ) {
    super();

    this.baseUrl = environment.tmdbApiUrl;
    this.apiVersion = 3;
  }

  override fetchMany<TKeyword>(type: TKeyword): Observable<TEntity[]> {
    const header = AUTHORIZATION_HEADER;
    const url = `${this.baseUrl}/${this.apiVersion}/movie/${type}`;

    return this.http
      .get<FetchResponseTmdbDto<MovieDtoTmdb[]>>(url, header)
      .pipe(
        map(({ results }: FetchResponseTmdbDto<MovieDtoTmdb[]>) =>
          results.map(
            (dto: MovieDtoTmdb) => this.mapper.toEntity(dto) as TEntity,
          ),
        ),
      );
  }

  override fetchOne<TKeyword>(movieId: TKeyword): Observable<TEntity> {
    const url = `${this.baseUrl}/${this.apiVersion}/movie/${movieId}`;
    const header = AUTHORIZATION_HEADER;

    return this.http
      .get<MovieDtoTmdb>(url, header)
      .pipe(map((dto: MovieDtoTmdb) => this.mapper.toEntity(dto) as TEntity));
  }
}
