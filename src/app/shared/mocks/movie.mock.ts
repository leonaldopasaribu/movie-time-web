import { MovieEntity } from 'src/app/core/entities/movie.entity';
import { RatingEntity } from 'src/app/core/entities/rating.entity';

export const MOVIE_DTO_OMDB_MOCK = {
  imdbID: 'tt1234567',
  Poster: 'poster_url',
  Title: 'Movie Title',
  Type: 'movie',
  Year: '2022',
  Ratings: [],
  Rated: 'PG-13',
  Released: '2022-01-01',
  Runtime: '120 min',
  Genre: 'Drama',
  Director: 'John Doe',
  Writer: 'Jane Doe',
  Actors: 'Actor 1, Actor 2',
  Plot: 'Movie plot.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Best Picture',
  Metascore: '80',
  imdbRating: '7.5',
  imdbVotes: '10000',
  DVD: '2022-06-01',
  BoxOffice: '$100M',
  Production: 'Movie Studio',
  Website: 'https://moviewebsite.com',
  Response: 'True',
};

export const MOVIE_ENTITY_MOCK: MovieEntity = {
  imdbID: 'tt1234567',
  poster: 'https://example.com/poster.jpg',
  title: 'Mock Movie Title',
  type: 'movie',
  year: '2023',
  ratings: [
    { Source: 'Internet Movie Database', Value: '8.5/10' },
    { Source: 'Rotten Tomatoes', Value: '92%' },
    { Source: 'Metacritic', Value: '78/100' },
  ] as RatingEntity[],
  rated: 'PG-13',
  released: '2023-06-15',
  runtime: '120 min',
  genre: 'Action, Adventure, Sci-Fi',
  director: 'John Doe',
  writer: 'Jane Smith, Alex Johnson',
  actors: 'Actor One, Actor Two, Actor Three',
  plot: 'A thrilling adventure about a hero saving the world.',
  language: 'English, Spanish',
  country: 'USA',
  awards: '3 Academy Awards',
  metascore: '78',
  imdbRating: '8.5',
  imdbVotes: '1,200,345',
  dvd: '2023-09-01',
  boxOffice: '$500,000,000',
  production: 'Mock Studios',
  website: 'https://example.com',
  response: 'True',
};

export const MOVIES_ENTITY_MOCK: Pick<
  MovieEntity,
  'title' | 'year' | 'imdbID' | 'type' | 'poster'
>[] = [
  {
    imdbID: 'tt1234567',
    title: 'Mock Movie 1',
    year: '2023',
    type: 'movie',
    poster: 'https://example.com/poster1.jpg',
  },
  {
    imdbID: 'tt7654321',
    title: 'Mock Movie 2',
    year: '2021',
    type: 'series',
    poster: 'https://example.com/poster2.jpg',
  },
  {
    imdbID: 'tt9876543',
    title: 'Mock Movie 3',
    year: '2019',
    type: 'movie',
    poster: 'https://example.com/poster3.jpg',
  },
];
