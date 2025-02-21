import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/presentations/movie/routes/movie.routes').then(
        m => m.routes,
      ),
  },

];
