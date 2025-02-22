import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { MovieDtoOmdb } from './movie.dto.omdb';
import { MovieMapperOmdb } from './movie.mapper.omdb';
import { FetchResponseDto } from '../base/response.model';

import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { MovieRepository } from 'src/app/core/repositories/movie.repository';
import { environment } from 'src/environments/environment'; // Fixed import

@Injectable()
export class MovieRepositoryOmdb extends MovieRepository {
  private readonly http = inject(HttpClient);
  private readonly mapper = inject(MovieMapperOmdb);

  private readonly baseUrl: string;

  constructor() {
    super();
    this.baseUrl = `${environment.omdbApiUrl}/?apikey=${environment.apiKey}`;
  }

  override fetchOne(imdbID: string): Observable<MovieEntity> {
    return this.http
      .get<MovieDtoOmdb>(`${this.baseUrl}&i=${imdbID}`)
      .pipe(map(dto => this.mapper.toEntity(dto)));
  }

  override fetchMany(
    title: string,
  ): Observable<
    Array<Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'posterUrl'>>
  > {
    return this.http
      .get<FetchResponseDto<MovieDtoOmdb[]>>(`${this.baseUrl}&s=${title}`)
      .pipe(
        map(({ Search }) =>
          Search.map(search => {
            const { title, year, imdbID, type, posterUrl } =
              this.mapper.toEntity(search);
            return { title, year, imdbID, type, posterUrl };
          }),
        ),
      );
  }
}
