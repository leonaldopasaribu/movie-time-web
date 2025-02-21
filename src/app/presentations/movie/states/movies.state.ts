import { MovieEntity } from 'src/app/core/entities/movie.entity';

export class MoviesState {
  errorMessage = '';
  isLoading = false;
  isError = false;
  movies: Pick<MovieEntity, 'title' | 'year' | 'imdbID' | 'type' | 'poster'>[] = [];
}
