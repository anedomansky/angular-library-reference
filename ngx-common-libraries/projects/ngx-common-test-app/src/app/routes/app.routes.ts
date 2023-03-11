import { Route } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error.routes').then((mod) => mod.ERROR_ROUTES),
  },
];
