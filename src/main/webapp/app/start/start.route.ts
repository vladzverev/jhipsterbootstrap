import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { StartComponent } from './';

export const startRoute: Route = {
  path: 'start',
  component: StartComponent,
  data: {
    authorities: [],
    pageTitle: 'start.title'
  },
  canActivate: [UserRouteAccessService]
};
