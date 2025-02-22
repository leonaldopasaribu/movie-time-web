import { GenreEntity } from './genre.entity';
import { RatingEntity } from './rating.entity';

export interface MovieEntity {
  actors: string;
  awards: string;
  backdropUrl: string;
  boxOffice: string;
  country: string;
  director: string;
  dvd: string;
  genre: string;
  genres: GenreEntity[];
  id: string;
  imdbID: string;
  imdbRating: string;
  language: string;
  metascore: string;
  plot: string;
  posterUrl: string;
  production: string;
  rated: string;
  rating: number;
  ratings: RatingEntity[];
  releaseDate: string;
  response: string;
  runtime: string;
  status: string;
  title: string;
  type: string;
  votes: number;
  website: string;
  writer: string;
}
