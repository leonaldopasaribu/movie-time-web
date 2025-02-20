import { RatingEntity } from './rating.entity';

export interface MovieEntity {
  imdbID: string;
  poster: string;
  title: string;
  type: string;
  year: string;
  ratings: RatingEntity[];
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}
