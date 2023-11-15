import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('@avans-nx-individueel/streamtaku/user').then(
        (esModule) => esModule.UserModule
      ),
  },
];
