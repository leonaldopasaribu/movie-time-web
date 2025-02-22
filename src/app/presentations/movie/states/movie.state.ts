import { MovieEntity } from 'src/app/core/entities/movie.entity';

export class MovieState {
  errorMessage = '';
  isLoading = false;
  isError = false;
  movies: Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'posterUrl'>[] =
    [];
}
