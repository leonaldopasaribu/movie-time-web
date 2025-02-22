import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { RatingEntity } from 'src/app/core/entities/rating.entity';
import { MovieDtoOmdb } from 'src/app/data/movie/movie.dto.omdb';

export const MOVIE_DTO_OMDB_MOCK: MovieDtoOmdb = {
  Actors: 'Actor One, Actor Two, Actor Three',
  Awards: '3 Academy Awards',
  BoxOffice: '$500,000,000',
  Country: 'USA',
  DVD: '2022-06-01',
  Director: 'John Doe',
  Genre: 'Action, Adventure, Sci-Fi',
  imdbID: '1',
  imdbRating: '7.5',
  imdbVotes: '10000',
  Language: 'English',
  Metascore: '80',
  Plot: 'Movie plot.',
  Poster: 'https://example.com/poster.jpg',
  Production: 'Mock Studios',
  Rated: 'PG-13',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '8.5/10' },
    { Source: 'Rotten Tomatoes', Value: '92%' },
    { Source: 'Metacritic', Value: '78/100' },
  ] as RatingEntity[],
  Released: 'Released',
  Response: 'True',
  Runtime: '120 min',
  Title: 'Movie Title',
  Type: 'movie',
  Website: 'https://example.com',
  Writer: 'Jane Smith, Alex Johnson',
  Year: '2022',
};

export const MOVIE_ENTITY_MOCK: MovieEntity = {
  actors: 'Actor One, Actor Two, Actor Three',
  awards: '3 Academy Awards',
  backdropUrl: '',
  boxOffice: '$500,000,000',
  country: 'USA',
  director: 'John Doe',
  dvd: '2022-06-01',
  genre: 'Action, Adventure, Sci-Fi',
  genres: [],
  id: '1',
  imdbID: '1',
  imdbRating: '7.5',
  language: 'English',
  metascore: '80',
  plot: 'Movie plot.',
  posterUrl: 'https://example.com/poster.jpg',
  production: 'Mock Studios',
  rated: 'PG-13',
  rating: 0,
  ratings: [
    { Source: 'Internet Movie Database', Value: '8.5/10' },
    { Source: 'Rotten Tomatoes', Value: '92%' },
    { Source: 'Metacritic', Value: '78/100' },
  ] as RatingEntity[],
  releaseDate: '2022',
  response: 'True',
  runtime: '120 min',
  status: 'Released',
  title: 'Movie Title',
  type: 'movie',
  votes: 0,
  website: 'https://example.com',
  writer: 'Jane Smith, Alex Johnson',
};

export const MOVIES_ENTITY_MOCK: Pick<
  MovieEntity,
  'id' | 'posterUrl' | 'releaseDate' | 'type' | 'title'
>[] = [
  {
    id: 'tt1234567',
    posterUrl: 'https://example.com/poster1.jpg',
    releaseDate: '2023',
    title: 'Mock Movie 1',
    type: 'movie',
  },
  {
    id: 'tt7654321',
    posterUrl: 'https://example.com/poster2.jpg',
    releaseDate: '2021',
    title: 'Mock Movie 2',
    type: 'series',
  },
];
