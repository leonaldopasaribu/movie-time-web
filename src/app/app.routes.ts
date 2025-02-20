import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/presentations/landing/routes/landing.routes').then(
        m => m.routes,
      ),
  },
];
