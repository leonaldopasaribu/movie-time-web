import { Observable } from 'rxjs';

import { MovieEntity } from '../entities/movie.entity';

export abstract class MovieRepository {
  abstract fetchOne<T>(id: T): Observable<MovieEntity>;
  abstract fetchMany<T>(
    keyword: T,
  ): Observable<
    Pick<MovieEntity, 'id' | 'posterUrl' | 'releaseDate' | 'type' | 'title'>[]
  >;
}
