import { Route } from '@angular/router';
import { AboutComponent } from '@avans-nx-individueel/streamtaku/features';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('@avans-nx-individueel/streamtaku/user').then(
        (esModule) => esModule.UserModule
      ),
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
];
