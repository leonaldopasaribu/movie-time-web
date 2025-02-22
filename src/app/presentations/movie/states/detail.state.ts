import { MovieEntity } from 'src/app/core/entities/movie.entity';

import { MOVIE_ENTITY_MOCK } from 'src/app/shared/mocks/movie.mock';

export class DetailState {
  errorMessage = '';
  isLoading = false;
  isError = false;
  movie: MovieEntity = MOVIE_ENTITY_MOCK;
}
