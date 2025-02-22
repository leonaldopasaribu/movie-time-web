import { TestBed } from '@angular/core/testing';

import { MovieStore } from './movie.store';

import { MOVIES_ENTITY_MOCK } from 'src/app/shared/mocks/movie.mock';

describe('MovieStore', () => {
  let store: MovieStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieStore],
    });
    store = TestBed.inject(MovieStore);
  });

  it('should create MovieStore', () => {
    expect(store).toBeTruthy();
  });

  describe('markAsLoading', () => {
    beforeEach(() => store.markAsLoading());

    it('should set isLoading to true', () => {
      expect(store.select('isLoading')()).toBeTrue();
    });

    it('should set errorMessage to an empty string', () => {
      expect(store.select('errorMessage')()).toEqual('');
    });
  });

  describe('markAsError', () => {
    const error = 'ERROR';

    beforeEach(() => store.markAsError(error));

    it('should set isLoading to false', () => {
      expect(store.select('isLoading')()).toBeFalse();
    });

    it('should set errorMessage to the provided error', () => {
      expect(store.select('errorMessage')()).toEqual(error);
    });
  });

  describe('markAsSuccess', () => {
    beforeEach(() => store.markAsSuccess());

    it('should set isLoading to false', () => {
      expect(store.select('isLoading')()).toBeFalse();
    });

    it('should set errorMessage to an empty string', () => {
      expect(store.select('errorMessage')()).toEqual('');
    });
  });

  describe('loadMovies', () => {
    it('should set the movies in the state when loadMovies is called', () => {
      store.loadMovies(MOVIES_ENTITY_MOCK);

      expect(store.select('movies')()).toBe(MOVIES_ENTITY_MOCK);
    });
  });
});
