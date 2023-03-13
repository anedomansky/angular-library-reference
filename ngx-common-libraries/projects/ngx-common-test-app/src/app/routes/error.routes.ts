import { Route } from '@angular/router';
import {
  ErrorPageComponent,
  provideError,
} from '@anedomansky/ngx-common-components';

export const ERROR_ROUTES: Route[] = [
  {
    path: '',
    component: ErrorPageComponent,
    providers: [provideError()],
  },
];
