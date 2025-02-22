import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LandingViewModel } from './landing.view-model';

import { MOVIES_ROUTE_URL } from 'src/app/shared/constants/route-url.constants';

describe('LandingViewModel', () => {
  let viewModel: LandingViewModel;
  let router: Router;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }, LandingViewModel],
    });
  });

  beforeEach(() => {
    viewModel = TestBed.inject(LandingViewModel);
    router = TestBed.inject(Router);
  });

  it('should create LandingViewModel', () => {
    expect(viewModel).toBeTruthy();
  });

  it('should call navigateByUrl when navigateToDetail is called', () => {
    const navigateByUrlSpy = router.navigateByUrl as jasmine.Spy;
    const stubImdbID = 'stubImdbID';

    viewModel.navigateToDetail(stubImdbID);

    expect(navigateByUrlSpy).toHaveBeenCalledWith(
      `${MOVIES_ROUTE_URL}/${stubImdbID}`,
    );
  });
});
