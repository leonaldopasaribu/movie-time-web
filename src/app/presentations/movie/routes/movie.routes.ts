import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../containers/movie.component').then(m => m.MovieComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../containers/landing.component').then(
            m => m.LandingComponent,
          ),
      },
      {
        path: 'movies',
        loadComponent: () =>
          import('../containers/movies.component').then(m => m.MoviesComponent),
      },
      {
        path: 'movies/:id',
        loadComponent: () =>
          import('../containers/detail.component').then(m => m.DetailComponent),
        runGuardsAndResolvers: 'paramsChange',
      },
    ],
  },
];
