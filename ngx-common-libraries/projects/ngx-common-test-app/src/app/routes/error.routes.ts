import { Route } from '@angular/router';
import { ErrorPageComponent } from '@anedomansky/ngx-common-components';

export const ERROR_ROUTES: Route[] = [
  {
    path: '',
    component: ErrorPageComponent,
  },
];
