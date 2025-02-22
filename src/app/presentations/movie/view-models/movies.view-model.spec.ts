import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MovieViewModel } from './movie.view-model';
import { MoviesViewModel } from './movies.view-model';

import { MOVIES_ROUTE_URL } from 'src/app/shared/constants/route-url.constants';

describe('MoviesViewModel', () => {
  let viewModel: MoviesViewModel;
  let movieViewModel: MovieViewModel;
  let router: Router;

  const movieViewModelSpy = jasmine.createSpyObj('MovieViewModel', [
    'fetchMoviesByType',
  ]);
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MovieViewModel, useValue: movieViewModelSpy },
        { provide: Router, useValue: routerSpy },
        MoviesViewModel,
      ],
    });
  });

  beforeEach(() => {
    viewModel = TestBed.inject(MoviesViewModel);
    router = TestBed.inject(Router);
  });

  it('should create MoviesViewModel', () => {
    expect(viewModel).toBeTruthy();
  });

  it('should call navigateByUrl when navigateToDetail is called', () => {
    const navigateByUrlSpy = router.navigateByUrl as jasmine.Spy;
    const stubId = 'stubId';

    viewModel.navigateToDetail(stubId);

    expect(navigateByUrlSpy).toHaveBeenCalledWith(
      `${MOVIES_ROUTE_URL}/${stubId}`,
    );
  });
});
