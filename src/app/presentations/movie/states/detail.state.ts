import { MovieEntity } from 'src/app/core/entities/movie.entity';

export class DetailState {
  errorMessage = '';
  isLoading = false;
  isError = false;
  movie: MovieEntity = {
    imdbID: '',
    poster: '',
    title: '',
    type: '',
    year: '',
    ratings: [],
    rated: '',
    released: '',
    runtime: '',
    genre: '',
    director: '',
    writer: '',
    actors: '',
    plot: '',
    language: '',
    country: '',
    awards: '',
    metascore: '',
    imdbRating: '',
    imdbVotes: '',
    dvd: '',
    boxOffice: '',
    production: '',
    website: '',
    response: '',
  };
}
