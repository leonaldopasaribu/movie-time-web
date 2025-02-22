export interface FetchResponseOmdbDto<T> {
  Response: string;
  totalResults: string;
  Search: T;
}

export interface FetchResponseTmdbDto<T> {
  Response: string;
  totalResults: string;
  Search: T;
}
