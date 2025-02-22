export interface FetchResponseOmdbDto<T> {
  Response: string;
  totalResults: string;
  Search: T;
}

export interface FetchResponseTmdbDto<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}
