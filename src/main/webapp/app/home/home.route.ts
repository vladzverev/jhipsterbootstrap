import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { HomeComponent } from './';

export const HOME_ROUTE: Route = {
  path: 'qq',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  },
  canActivate: [UserRouteAccessService]
};
