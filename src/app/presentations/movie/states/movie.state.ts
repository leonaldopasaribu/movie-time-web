import { MovieEntity } from 'src/app/core/entities/movie.entity';

export class MovieState {
  errorMessage = '';
  isLoading = false;
  isError = false;
  movies: Pick<
    MovieEntity,
    'id' | 'posterUrl' | 'releaseDate' | 'type' | 'title'
  >[] = [];
}
