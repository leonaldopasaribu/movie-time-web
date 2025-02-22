import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MOVIES_ROUTE_URL } from 'src/app/shared/constants/route-url.constants';

@Injectable()
export class MoviesViewModel {
  private readonly router = inject(Router);

  navigateToDetail(imdbID: string): void {
    this.router.navigateByUrl(`${MOVIES_ROUTE_URL}/${imdbID}`);
  }
}
