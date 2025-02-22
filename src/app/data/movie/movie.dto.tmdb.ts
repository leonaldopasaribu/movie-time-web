import { GenreEntity } from 'src/app/core/entities/genre.entity';

export interface MovieDtoTmdb {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: GenreEntity[];
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
