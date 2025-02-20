import { Observable } from 'rxjs';

import { MovieEntity } from '../entities/movie.entity';

export abstract class MovieRepository {
  abstract fetchOne(imdbID: string): Observable<MovieEntity>;
  abstract fetchMany(
    title: string,
  ): Observable<
    Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[]
  >;
}
