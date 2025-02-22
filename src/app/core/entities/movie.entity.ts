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
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  language: string;
  metascore: string;
  plot: string;
  posterUrl: string;
  production: string;
  rated: string;
  rating: number;
  ratings: RatingEntity[];
  released: string;
  response: string;
  runtime: string;
  title: string;
  type: string;
  website: string;
  writer: string;
  year: string;
}
